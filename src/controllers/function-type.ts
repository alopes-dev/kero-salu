import { FunctionType } from "@models/function-type";
import { v4 as uuid } from "uuid";

export interface IFunctionTypes {
  id?: string;
  description: string;
  areaId: string;
}

export const FindAll = async () => {
  return await FunctionType.findAll();
};

export const FindOne = async (id: string) => {
  return FunctionType.findOne({
    where: { id },
  });
};

export const Store = async (model: IFunctionTypes) => {
  const sysdate = new Date(Date.now());
  return await FunctionType.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IFunctionTypes) => {
  return await FunctionType.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
