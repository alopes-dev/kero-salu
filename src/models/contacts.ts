import { IContactAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface ContactCreationAttributes
  extends Optional<IContactAttributes, "id"> {}

interface ContactInstance
  extends Model<IContactAttributes, ContactCreationAttributes>,
    IContactAttributes {}

export const Contacts = connection.define<ContactInstance>("Contacts", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
