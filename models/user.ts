import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  nameOfFarm: { type: String, default: null, required: false },
  location: { type: String, default: null },
  password: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  picture: { type: String, default: null },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
