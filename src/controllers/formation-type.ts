import { FormationType } from "@models/formation-type";
import { v4 as uuid } from "uuid";

export interface IFormationTypes {
  id?: string;
  designation: string;
}

export const FindAll = async () => {
  return await FormationType.findAll();
};

export const FindOne = async (id: string) => {
  return FormationType.findOne({
    where: { id },
  });
};

export const Store = async (model: IFormationTypes) => {
  const sysdate = new Date(Date.now());
  return await FormationType.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IFormationTypes) => {
  return await FormationType.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
