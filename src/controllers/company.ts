import { Company } from "@models/company";
import { v4 as uuid } from "uuid";

export interface ICompany {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Company.findAll();
};

export const FindOne = async (id: string) => {
  return Company.findOne({
    where: { id },
  });
};

export const Store = async (model: ICompany) => {
  const sysdate = new Date(Date.now());
  return await Company.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICompany) => {
  return await Company.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
