import { Area } from "@models/area";
import { v4 as uuid } from "uuid";

export interface IArea {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Area.findAll();
};

export const FindOne = async (id: string) => {
  return Area.findOne({
    where: { id },
  });
};

export const Store = async (model: IArea) => {
  const sysdate = new Date(Date.now());
  return await Area.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IArea) => {
  return await Area.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
