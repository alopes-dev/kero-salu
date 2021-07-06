import { IVacanciesAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface VacanciesCreationAttributes
  extends Optional<IVacanciesAttributes, "id"> {}

interface VacanciesInstance
  extends Model<IVacanciesAttributes, VacanciesCreationAttributes>,
    IVacanciesAttributes {}

export const Vacancies = connection.define<VacanciesInstance>("Vacancies", {
  id: {
    type: Sequelize.STRING(50),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  limitHours: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  limitDate: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  salary: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  isDone: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  showSalary: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  jobsTypeId: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  experience: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  skills: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  functionTypeId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  formationTypeId: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  provinceId: {
    type: Sequelize.STRING(50),
  },
  companyId: {
    type: Sequelize.STRING(50),
  },
  nationalityId: {
    type: Sequelize.STRING(50),
  },
  officeId: {
    type: Sequelize.STRING(50),
  },
  numVacancies: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING(50),
  },
});
