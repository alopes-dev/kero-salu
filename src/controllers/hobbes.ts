import { Hobbes } from "@models/hobbes";
import { v4 as uuid } from "uuid";

export interface IHobbes {
  id?: string;
  statusId?: string;
}

export const FindAll = async (candidateId: string) => {
  return await Hobbes.findAll({
    where: {
      candidateId,
    },
  });
};

export const FindOne = async (id: string) => {
  return Hobbes.findOne({
    where: { id },
  });
};

export const Store = async (model: IHobbes) => {
  const sysdate = new Date(Date.now());
  return await Hobbes.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IHobbes) => {
  return await Hobbes.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
