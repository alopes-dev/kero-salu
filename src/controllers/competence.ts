import { Competence } from "@models/competence";
import { v4 as uuid } from "uuid";

export interface ICompetence {
  id?: string;
  designation: string;
}

export const FindAll = async () => {
  return await Competence.findAll();
};

export const FindOne = async (id: string) => {
  return Competence.findOne({
    where: { id },
  });
};

export const Store = async (model: ICompetence) => {
  const sysdate = new Date(Date.now());
  return await Competence.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICompetence) => {
  return await Competence.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
