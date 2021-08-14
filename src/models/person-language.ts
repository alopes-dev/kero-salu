import Sequelize from "sequelize";
import connection from "../conection";

export const PersonLanguage = connection.define("PersonLanguage", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  percentage: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  languageId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  personId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
