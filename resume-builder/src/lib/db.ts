import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log(`DB connected successfully`);
  } catch (error) {
    console.log(`Error in mongo DB connecting ${error} `);
  }
};
