import User from "@/models/user";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("Connected to MongoDB!");
      await User.find({});
      console.log("Mongoose models are set!");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit process if connection fails
    process.exit(1);
  }
}

export default connectToDatabase;
