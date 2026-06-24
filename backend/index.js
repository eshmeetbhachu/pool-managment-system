import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config({
    path: './.env'
})
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

dbConnect()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("server connect failed!",err)
})