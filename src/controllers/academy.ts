import { Academy } from "@models/academy";
import { v4 as uuid } from "uuid";
export interface IAcademy {
  id?: string;
  statusId?: string;
}

export const FindAll = async (candidateId: string) => {
  return await Academy.findAll({
    where: {
      candidateId,
    },
    order: [["endDate", "desc"]],
  });
};

export const FindOne = async (id: string) => {
  return Academy.findOne({
    where: { id },
  });
};

export const Store = async (model: IAcademy) => {
  const sysdate = new Date(Date.now());
  return await Academy.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: IAcademy) => {
  return await Academy.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
