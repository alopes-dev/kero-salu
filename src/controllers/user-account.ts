import { UserAccount } from "@models/user-account";
import { v4 as uuid } from "uuid";
import { IUserAccount } from "@kerotypes/index";
import bcrypt from "bcryptjs";
import { CurrentDate } from "src/utils";
import { Transaction } from "sequelize/types";

export const FindAll = async () => {
  return await UserAccount.findAll();
};

export const FindOne = async (id: string) => {
  return UserAccount.findOne({
    where: { id },
  });
};

export const Store = async (model: IUserAccount, transaction?: Transaction) => {
  const sysdate = CurrentDate();
  model.password = await bcrypt.hash(model.password, 8);

  return await UserAccount.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IUserAccount) => {
  return await UserAccount.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
