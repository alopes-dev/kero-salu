import Sequelize from "sequelize";
import connection from "../conection";

export const Notifications = connection.define("notifications", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  origin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  distination: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  action: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
