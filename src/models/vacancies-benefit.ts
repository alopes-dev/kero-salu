import { IVacanciesBenefitAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface VacanciesBenefittCreationAttributes
  extends Optional<IVacanciesBenefitAttributes, "id"> {}

interface VacanciesBenefitInstance
  extends Model<
      IVacanciesBenefitAttributes,
      VacanciesBenefittCreationAttributes
    >,
    IVacanciesBenefitAttributes {}

export const VacanciesBenefit = connection.define<VacanciesBenefitInstance>(
  "VacanciesBenefit",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    benefitId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    vacanciesId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
