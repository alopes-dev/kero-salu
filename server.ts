require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
var app = express();
import cors from "cors";
import {
  graphqlSetup,
  dbConnection,
  createErrorHandler,
  errorHandler,
} from "./setup";

app.use(cors({ origin: true, credentials: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/graphql", graphqlSetup);

dbConnection();

app.use(createErrorHandler);

app.use(errorHandler);

module.exports = app;
