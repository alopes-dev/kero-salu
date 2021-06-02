import { IPersonContactAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface PersoncContactCreationAttributes
  extends Optional<IPersonContactAttributes, "id"> {}

interface PersonContactInstance
  extends Model<IPersonContactAttributes, PersoncContactCreationAttributes>,
    IPersonContactAttributes {}

export const PersonContacts = connection.define<PersonContactInstance>(
  "PersonContact",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    contactId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    personId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    statusId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
