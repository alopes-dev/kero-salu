import Sequelize from "sequelize";
import connection from "../conection";

export const DocumentsType = connection.define("DocumentType", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
