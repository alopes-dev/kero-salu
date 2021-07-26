import { ICandidatureAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface CandidatureCreationAttributes
  extends Optional<ICandidatureAttributes, "id"> {}

interface CandidatureInstance
  extends Model<ICandidatureAttributes, CandidatureCreationAttributes>,
    ICandidatureAttributes {}

export const Candidature = connection.define<CandidatureInstance>(
  "Candidature",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    candidateId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    isAnalized: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    vacanciesId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
