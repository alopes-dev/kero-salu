import { IPersonAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface PersonCreationAttributes extends Optional<IPersonAttributes, "id"> {}

interface PersonInstance
  extends Model<IPersonAttributes, PersonCreationAttributes>,
    IPersonAttributes {}

export const Person = connection.define<PersonInstance>("Person", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  birthDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },

  isCandidate: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
