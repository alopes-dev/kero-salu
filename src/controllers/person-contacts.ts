import { IPersonContactAttributes } from "@kerotypes/index";
import { PersonContacts } from "@models/person-contacts";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await PersonContacts.findAll();
};

export const FindOne = async (id: string) => {
  return PersonContacts.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IPersonContactAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await PersonContacts.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IPersonContactAttributes) => {
  return await PersonContacts.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
