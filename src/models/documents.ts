import { IDocumentsAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface DocumentsCreationAttributes
  extends Optional<IDocumentsAttributes, "id"> {}

interface DocumentsInstance
  extends Model<IDocumentsAttributes, DocumentsCreationAttributes>,
    IDocumentsAttributes {}

export const Documents = connection.define<DocumentsInstance>("Documents", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  documentNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  documentTypeId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  statusId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});
