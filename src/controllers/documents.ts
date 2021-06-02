import { Documents } from "@models/documents";
import { IDocumentsAttributes } from "@kerotypes/index";
import { v4 as uuid } from "uuid";
import { CurrentDate } from "src/utils";
import { Transaction } from "sequelize/types";

export const FindAll = async () => {
  return await Documents.findAll();
};

export const FindOne = async (id: string) => {
  return Documents.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IDocumentsAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await Documents.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IDocumentsAttributes) => {
  return await Documents.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
