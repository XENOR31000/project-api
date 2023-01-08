import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import connectMongo from "./src/config/mongoConnect.js";
import mongoose from "mongoose";
import router from "./src/routes";

const app = express();
const port = process.env.PORT;

connectMongo()
  .then(() => {
    mongoose.connect(process.env.MONGO_URL);
  })
  .then(() => {
    console.log("Database connected");
    return app.listen(process.env.PORT);
  })
  .then(() => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  })
  .catch((e) => {
    console.error(`ERROR_STARTING_APP_${e.message}`);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `http://localhost:3000`),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    ),
    next();
});

app.use("/api/v1/", router);

app.use("*", (_req, res) => res.status(404).send("NO_RESOURCE_AVAILABLE"));
