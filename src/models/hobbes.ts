import Sequelize from "sequelize";
import connection from "../conection";

export const Hobbes = connection.define("Hobbes", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  percentage: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
