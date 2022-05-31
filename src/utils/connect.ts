import mongoose, { mongo } from "mongoose";
import config from "config";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to database");
      
    // Exit connection and indcate error 
    process.exit(1);
  }
}
