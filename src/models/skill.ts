import Sequelize from "sequelize";
import connection from "../conection";

export const Skill = connection.define("skills", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  designation: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  resume: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  candidateId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
