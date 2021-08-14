import Sequelize from "sequelize";
import connection from "../conection";

export const Curses = connection.define("curses", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  untillNow: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  institute: {
    type: Sequelize.STRING,
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
