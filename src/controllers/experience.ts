import { Experience } from "@models/experience";
import { v4 as uuid } from "uuid";
export interface IExperience {
  id?: string;
  statusId?: string;
}

export const FindAll = async (candidateId: string) => {
  return await Experience.findAll({
    where: {
      candidateId,
    },
    order: [["endDate", "desc"]],
  });
};

export const FindOne = async (id: string) => {
  return Experience.findOne({
    where: { id },
  });
};

export const Store = async (model: IExperience) => {
  const sysdate = new Date(Date.now());
  return await Experience.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IExperience) => {
  return await Experience.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
