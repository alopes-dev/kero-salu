import { IVacanciesLanguageAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface VacanciesLanguageCreationAttributes
  extends Optional<IVacanciesLanguageAttributes, "id"> {}

interface VacanciesLanguageInstance
  extends Model<
      IVacanciesLanguageAttributes,
      VacanciesLanguageCreationAttributes
    >,
    IVacanciesLanguageAttributes {}

export const VacanciesLanguage = connection.define<VacanciesLanguageInstance>(
  "VacanciesLanguage",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    languageId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    vacanciesId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    statusId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  }
);
