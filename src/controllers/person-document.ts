import { PersonDocument } from "@models/person-document";
import transaction, { Transaction } from "sequelize/types/lib/transaction";
import { v4 as uuid } from "uuid";
import { IPersonDocumentAttributes } from "@kerotypes/index";
import { CurrentDate } from "src/utils";

export const FindAll = async () => {
  return await PersonDocument.findAll();
};

export const FindOne = async (id: string) => {
  return PersonDocument.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IPersonDocumentAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await PersonDocument.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IPersonDocumentAttributes) => {
  return await PersonDocument.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
