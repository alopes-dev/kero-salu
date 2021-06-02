import { Benefit } from "@models/benefit";
import { v4 as uuid } from "uuid";

export interface IBenefit {
  Id?: string;
  designation: string;
  description?: string;
}

export const FindAll = async () => {
  return await Benefit.findAll();
};

export const FindOne = async (id: string) => {
  return Benefit.findOne({
    where: { id },
  });
};

export const Store = async (model: IBenefit) => {
  const sysdate = new Date(Date.now());
  return await Benefit.create({
    Id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ Id, ...rest }: IBenefit) => {
  return await Benefit.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { Id } }
  );
};
