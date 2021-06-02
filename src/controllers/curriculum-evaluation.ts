import { CurriculumEvaluation } from "@models/curriculum-evaluation";
import { v4 as uuid } from "uuid";

export interface ICurriculumEvaluation {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await CurriculumEvaluation.findAll();
};

export const FindOne = async (id: string) => {
  return CurriculumEvaluation.findOne({
    where: { id },
  });
};

export const Store = async (model: ICurriculumEvaluation) => {
  const sysdate = new Date(Date.now());
  return await CurriculumEvaluation.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICurriculumEvaluation) => {
  return await CurriculumEvaluation.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
