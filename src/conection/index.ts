require("dotenv").config();
import { Sequelize } from "sequelize";

const {
  DATABASE_CATALOG,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_DIALECT,
} = process.env;

export default new Sequelize(
  DATABASE_CATALOG,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: "mssql",
    dialectOptions: {
      encrypt: true,
    },
    define: { freezeTableName: true },
  }
);
