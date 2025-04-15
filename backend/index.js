import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/DB.js";
import userRouter from "./Routes/userRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});


app.use('/api/user', userRouter)


const PORT = process.env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
