import bcrypt from "bcryptjs";
import connectToDatabase from "@/libs/db";
import User from "@/models/user";
import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          await connectToDatabase();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user as any;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/dashboard",
  },
  callbacks: {
    async session({ session }) {
      await connectToDatabase();
      if (!session?.user?.email) {
        return session;
      }

      const sessionUser = await User.findOne({ email: session.user.email });

      (session?.user as any).id = sessionUser._id.toString();

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Check if the user is signing in with Google
      if (account?.provider === "google") {
        // Check if the user already exists in the database
        await connectToDatabase();
        const existingUser = await User.findOne({ email: profile?.email });

        // If the user doesn't exist, create a new one
        if (!existingUser) {
          const newUser = new User({
            email: profile?.email,
            name: profile?.name,
            password: "",
          });
          await newUser.save();
          return true; // Allow sign-in
        } else {
          return true; // Allow sign-in
        }
      }

      // Check if the user is signing in with credentials
      if (account?.provider === "credentials") {
        // The user is already authenticated by the `authorize` callback in CredentialsProvider
        return true; // Allow sign-in
      }

      // If the sign-in method is not supported, deny access
      return false;
    },
  },
};

export const getAuth = async () => await getServerSession(authOptions);