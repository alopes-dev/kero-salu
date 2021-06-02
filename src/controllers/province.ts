import { Province } from "@models/province";
import { v4 as uuid } from "uuid";

export interface IProvince {
  id?: string;
  description: string;
}

export const FindAll = async () => {
  return await Province.findAll();
};

export const FindOne = async (id: string) => {
  return Province.findOne({
    where: { id },
  });
};

export const Store = async (model: IProvince) => {
  const sysdate = new Date(Date.now());
  return await Province.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IProvince) => {
  return await Province.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
