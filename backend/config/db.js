import mongoose from "mongoose";

const connectionString = "mongodb://127.0.0.1:27017/shopstore";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
