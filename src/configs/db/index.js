import dotenv from "dotenv";

dotenv.config();

export const MONGODB_URL = `mongodb://${process.env.DB_HOT}/${process.env.DB_PORT}`;
