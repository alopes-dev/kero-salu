import { Details } from "@models/details";
import { v4 as uuid } from "uuid";

export interface IDetails {
  id?: string;
  designation: string;
  description: string;
  iconType: string;
}

export const FindAll = async () => {
  return await Details.findAll();
};

export const FindOne = async (id: string) => {
  return Details.findOne({
    where: { id },
  });
};

export const Store = async (model: IDetails) => {
  const sysdate = new Date(Date.now());
  return await Details.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IDetails) => {
  return await Details.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
