import Sequelize from "sequelize";
import connection from "../conection";

export const Details = connection.define("Details", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  local: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  startDate: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  endDate: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  detailsTypeId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
