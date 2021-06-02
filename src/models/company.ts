import Sequelize from "sequelize";
import connection from "../conection";

export const Company = connection.define("Company", {
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
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
