import mongoose, { mongo } from "mongoose";
import config from "config";
import log from "./logger";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("Database connected");
  } catch (error) {
    log.error("Could not connect to database");
      
    // Exit connection and indcate error 
    process.exit(1);
  }
}
