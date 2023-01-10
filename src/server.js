import express from "express";
import dotenv from "dotenv";
import router from "./routers/index.js";
import db from "./database/index.js";

dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3333;

// connect db
db.connectDB();

// router
router.useRouter(app);

app.listen(PORT, () => console.log(`listen on port: ${PORT}`));
