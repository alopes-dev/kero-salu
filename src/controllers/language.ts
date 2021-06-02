import { Language } from "@models/language";
import { v4 as uuid } from "uuid";

export interface ILanguage {
  id?: string;
  description: string;
}

export const FindAll = async () => {
  return await Language.findAll();
};

export const FindOne = async (id: string) => {
  return Language.findOne({
    where: { id },
  });
};

export const Store = async (model: ILanguage) => {
  const sysdate = new Date(Date.now());
  return await Language.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ILanguage) => {
  return await Language.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
