import { IFavoriteJobsAttributes } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface FavoriteJobsCreationAttributes
  extends Optional<IFavoriteJobsAttributes, "id"> {}

interface FavoriteJobsInstance
  extends Model<IFavoriteJobsAttributes, FavoriteJobsCreationAttributes>,
    IFavoriteJobsAttributes {}

export const FavoriteJobs = connection.define<FavoriteJobsInstance>(
  "FavoriteJobs",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    vacanciesId: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    candidateId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
