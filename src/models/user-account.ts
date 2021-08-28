import { IUserAccount } from "@kerotypes/index";
import Sequelize, { Model, Optional } from "sequelize";
import connection from "../conection";

interface UserAccountCreationAttributes extends Optional<IUserAccount, "id"> {}

interface UserAccountInstance
  extends Model<IUserAccount, UserAccountCreationAttributes>,
    IUserAccount {}

export const UserAccount = connection.define<UserAccountInstance>(
  "UserAccount",
  {
    id: {
      type: Sequelize.STRING(50),
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    emailAlternative: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    provider: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    personId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    companyId: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  }
);
