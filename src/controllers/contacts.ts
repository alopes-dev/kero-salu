import { IContactAttributes } from "@kerotypes/index";
import { Contacts } from "@models/contacts";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await Contacts.findAll();
};

export const FindOne = async (id: string) => {
  return Contacts.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IContactAttributes,
  transaction?: Transaction
) => {
  await checkUserByEmail(model.email);
  const sysdate = CurrentDate();

  return await Contacts.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IContactAttributes) => {
  return await Contacts.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};

const checkUserByEmail = async (email: string) => {
  const userExists = await Contacts.findOne({
    where: { email },
  });
  if (userExists)
    throw new Error("Email duplicado, por favor, insira uma email único...");
};
