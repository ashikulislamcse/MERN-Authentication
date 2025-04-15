import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/DB.js";

const app = express();

const PORT = process.env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
