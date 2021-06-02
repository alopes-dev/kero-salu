import Sequelize from "sequelize";
import connection from "../conection";

export const FunctionType = connection.define("FunctionType", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  areaId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
