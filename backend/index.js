import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/DB.js";
import userRouter from "./Routes/userRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
