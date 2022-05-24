import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import helmet from "helmet";
import UserController from "./controller/UserController";
env.config();

const app = express();
const { PORT } = process.env;

// middleware
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

//routes
app.use("/api", UserController);

//listener
app.listen(PORT, "0.0.0.0", () => {
  console.log(`
    LISTENED TO PORT ${PORT}
    `);
});
