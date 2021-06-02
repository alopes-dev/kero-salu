import { Curriculum } from "@models/curriculum";
import { v4 as uuid } from "uuid";

export interface ICurriculum {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Curriculum.findAll();
};

export const FindOne = async (id: string) => {
  return Curriculum.findOne({
    where: { id },
  });
};

export const Store = async (model: ICurriculum) => {
  const sysdate = new Date(Date.now());
  return await Curriculum.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICurriculum) => {
  return await Curriculum.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
