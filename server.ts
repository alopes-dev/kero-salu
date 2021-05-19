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

const port = process.env.PORT || '5500';

app.use(cors({ origin: true, credentials: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", graphqlSetup);

dbConnection();

app.use(createErrorHandler);

app.use(errorHandler);

app.set('port', port);

app.listen(port);


module.exports = app;
