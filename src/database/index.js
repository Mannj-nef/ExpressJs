import mongoose from "mongoose";
import { MONGODB_URL } from "../configs/db/index.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connect database successfully");
  } catch (error) {
    console.log(`Connect database fail, err: ${error}`);
  }
};

export default { connectDB };
