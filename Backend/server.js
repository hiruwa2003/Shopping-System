import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./Config/mongoDB.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// DB connect AFTER dotenv loaded
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true
}));

//Api EndPoints
app.get("/", (req, res) => res.send("API Working"));

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () =>
  console.log(`Server Working with :${port}`)
);
