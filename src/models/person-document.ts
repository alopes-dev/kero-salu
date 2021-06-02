import { IPersonDocumentAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface PersoncDocumentCreationAttributes
  extends Optional<IPersonDocumentAttributes, "id"> {}

interface PersonDocumentInstance
  extends Model<IPersonDocumentAttributes, PersoncDocumentCreationAttributes>,
    IPersonDocumentAttributes {}

export const PersonDocument = connection.define<PersonDocumentInstance>(
  "PersonDocument",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    documentId: {
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
