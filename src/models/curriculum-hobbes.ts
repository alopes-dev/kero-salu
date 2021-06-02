import Sequelize from "sequelize";
import connection from "../conection";

export const CurriculumHobbes = connection.define("CurriculumHobbes", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  curriculumId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  hobbesId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },

  statusId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
});
