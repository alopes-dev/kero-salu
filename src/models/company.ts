import { ICompanyAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface CompanyCreationAttributes
  extends Optional<ICompanyAttributes, "id"> {}

interface CompanyInstance
  extends Model<ICompanyAttributes, CompanyCreationAttributes>,
    ICompanyAttributes {}

export const Company = connection.define<CompanyInstance>("Company", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  nif: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  socialReason: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  mission: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  creationDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },

  vision: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
