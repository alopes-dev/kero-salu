require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routes from "./router";

import morgan from "morgan";
const app = express();
import cors from "cors";
import path = require("path");

import {
  graphqlSetup,
  dbConnection,
  createErrorHandler,
  errorHandler,
} from "./setup";

const port = process.env.PORT || "5500";

app.use(cors({ origin: true, credentials: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(cookieParser());

app.use(routes);
app.use(graphqlSetup);

dbConnection();

app.use(createErrorHandler);

app.use(errorHandler);

app.set("port", port);

app.listen(port);

module.exports = app;
