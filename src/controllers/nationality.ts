import { Nationality } from "@models/nationality";
import { v4 as uuid } from "uuid";

export interface INationality {
  id?: string;
  description: string;
}

export const FindAll = async () => {
  return await Nationality.findAll();
};

export const FindOne = async (id: string) => {
  return Nationality.findOne({
    where: { id },
  });
};

export const Store = async (model: INationality) => {
  const sysdate = new Date(Date.now());
  return await Nationality.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: INationality) => {
  return await Nationality.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
