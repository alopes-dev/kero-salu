import { graphqlHTTP } from "express-graphql";
import {  Request, Response, NextFunction } from "express";
import createError from "http-errors";
import HttpException from "./utils";

export const graphqlSetup = (req: Request, res: Response) => {
  graphqlHTTP({
    schema: schema, //A GraphQLSchema instance from GraphQL.js. A schema must be provided.
    graphiql: true,
    context: { req, res },
    customFormatErrorFn: ({ message, originalError }) => {
      return { message, originalError };
    },
  })(req, res);
};

export const createErrorHandler = (
  _: Request,
  __: Response,
  next: NextFunction
) => {
  next(createError(404));
};

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response
) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
};

export const dbConnection = () => {
  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
  db.authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};
