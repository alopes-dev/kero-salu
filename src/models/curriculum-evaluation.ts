import Sequelize from "sequelize";
import connection from "../conection";

export const CurriculumEvaluation = connection.define("CurriculumEvaluation", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  IsFavorite: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  vancaciesId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  curriculumId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
