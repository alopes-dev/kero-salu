import { CurriculumDetailed } from "@models/curriculum-detailed";
import { v4 as uuid } from "uuid";

export interface ICurriculumDetailed {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await CurriculumDetailed.findAll();
};

export const FindOne = async (id: string) => {
  return CurriculumDetailed.findOne({
    where: { id },
  });
};

export const Store = async (model: ICurriculumDetailed) => {
  const sysdate = new Date(Date.now());
  return await CurriculumDetailed.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICurriculumDetailed) => {
  return await CurriculumDetailed.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
