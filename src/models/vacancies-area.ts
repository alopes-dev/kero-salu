import { IVacanciesAreaAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface VacanciesAreaCreationAttributes
  extends Optional<IVacanciesAreaAttributes, "id"> {}

interface VacanciesAreaInstance
  extends Model<IVacanciesAreaAttributes, VacanciesAreaCreationAttributes>,
    IVacanciesAreaAttributes {}

export const VacanciesArea = connection.define<VacanciesAreaInstance>(
  "VacanciesArea",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    areaId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    vacanciesId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
