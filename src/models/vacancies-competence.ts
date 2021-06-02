import { IVacanciesCompetenceAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface VacanciesCompetenceCreationAttributes
  extends Optional<IVacanciesCompetenceAttributes, "id"> {}

interface VacanciesCompetenceInstance
  extends Model<
      IVacanciesCompetenceAttributes,
      VacanciesCompetenceCreationAttributes
    >,
    IVacanciesCompetenceAttributes {}

export const VacanciesCompetence =
  connection.define<VacanciesCompetenceInstance>("VacanciesCompetence", {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    competenceId: {
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
  });
