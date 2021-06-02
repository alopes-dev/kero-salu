import { DetailsType } from "@models/details-type";
import { v4 as uuid } from "uuid";

export interface IDetailsType {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await DetailsType.findAll();
};

export const FindOne = async (id: string) => {
  return DetailsType.findOne({
    where: { id },
  });
};

export const Store = async (model: IDetailsType) => {
  const sysdate = new Date(Date.now());
  return await DetailsType.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IDetailsType) => {
  return await DetailsType.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
