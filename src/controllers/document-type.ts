import { DocumentsType } from "@models/documents-type";
import { v4 as uuid } from "uuid";

export interface IDocumentTypes {
  id?: string;
  designation: string;
}

export const FindAll = async () => {
  return await DocumentsType.findAll();
};

export const FindOne = async (id: string) => {
  return DocumentsType.findOne({
    where: { id },
  });
};

export const Store = async (model: IDocumentTypes) => {
  const sysdate = new Date(Date.now());
  return await DocumentsType.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IDocumentTypes) => {
  return await DocumentsType.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
