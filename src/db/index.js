import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // must come before process.env.MONGO_URI

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(" MONGO_URI is undefined. Check your .env file");
    }

    console.log("Connecting with URI:", uri); // debug log

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MONGODB connection error", err);
    process.exit(1);
  }
};

export default connectDB;
