import { JobsType } from "@models/jobs-type";
import { v4 as uuid } from "uuid";

export interface IJobsType {
  id?: string;
  designation: string;
}

export const FindAll = async () => {
  return await JobsType.findAll();
};

export const FindOne = async (id: string) => {
  return JobsType.findOne({
    where: { id },
  });
};

export const Store = async (model: IJobsType) => {
  const sysdate = new Date(Date.now());
  return await JobsType.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IJobsType) => {
  return await JobsType.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
