import { Office } from "@models/office";
import { v4 as uuid } from "uuid";

export interface IOffice {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Office.findAll();
};

export const FindOne = async (id: string) => {
  return Office.findOne({
    where: { id },
  });
};

export const Store = async (model: IOffice) => {
  const sysdate = new Date(Date.now());
  return await Office.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IOffice) => {
  return await Office.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
