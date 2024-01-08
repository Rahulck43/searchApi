import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const dbConnection = async () => {
  try {
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Mongoose connection error:", err);
  }
};

export default dbConnection;
