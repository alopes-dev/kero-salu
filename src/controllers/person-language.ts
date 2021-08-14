import { PersonLanguage } from "@models/person-language";
import { v4 as uuid } from "uuid";

export interface IPersonLanguage {
  id?: string;
  statusId?: string;
}

export const FindAll = async (personId: string) => {
  return await PersonLanguage.findAll({
    where: {
      personId,
    },
  });
};

export const FindOne = async (id: string) => {
  return PersonLanguage.findOne({
    where: { id },
  });
};

export const Store = async (model: IPersonLanguage) => {
  const sysdate = new Date(Date.now());
  return await PersonLanguage.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IPersonLanguage) => {
  return await PersonLanguage.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};

export const Delete = async (id: string) => {
  return await PersonLanguage.destroy({ where: { id } });
};
