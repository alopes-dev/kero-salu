import { Status } from "@models/status";
import { v4 as uuid } from "uuid";

export interface IStatus {
  id?: string;
  designation: string;
  status?: string;
}
export const FindAll = async () => {
  return await Status.findAll();
};

export const FindOne = async (id: string) => {
  return Status.findOne({
    where: { id },
  });
};

export const Store = async (model: IStatus) => {
  const sysdate = new Date(Date.now());
  return await Status.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...status }: IStatus) => {
  return await Status.update(
    {
      ...status,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
