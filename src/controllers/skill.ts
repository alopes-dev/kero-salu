import { Skill } from "@models/skill";
import { v4 as uuid } from "uuid";
export interface ISkill {
  id?: string;
  statusId?: string;
}

export const FindAll = async (candidateId: string) => {
  return await Skill.findAll({
    where: {
      candidateId,
    },
  });
};

export const FindOne = async (id: string) => {
  return Skill.findOne({
    where: { id },
  });
};

export const Store = async (model: ISkill) => {
  console.log(model);
  const sysdate = new Date(Date.now());
  return await Skill.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ISkill) => {
  return await Skill.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
