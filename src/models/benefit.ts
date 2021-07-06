import Sequelize from "sequelize";
import connection from "../conection";

export const Benefit = connection.define("Benefits", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
