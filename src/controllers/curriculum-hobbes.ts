import { CurriculumHobbes } from "@models/curriculum-hobbes";
import { v4 as uuid } from "uuid";

export interface ICurriculumHobbes {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await CurriculumHobbes.findAll();
};

export const FindOne = async (id: string) => {
  return CurriculumHobbes.findOne({
    where: { id },
  });
};

export const Store = async (model: ICurriculumHobbes) => {
  const sysdate = new Date(Date.now());
  return await CurriculumHobbes.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICurriculumHobbes) => {
  return await CurriculumHobbes.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
