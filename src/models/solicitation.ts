import Sequelize from "sequelize";
import connection from "../conection";

export const Solicitation = connection.define("solicitation", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  documentTypeId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  candidateId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  fileUrl: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  candidatureId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
