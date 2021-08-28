import { Solicitation } from "@models/solicitation";
import { v4 as uuid } from "uuid";
export interface ISolicitation {
  id?: string;
  description: string;
  documentTypeId: string;
  candidateId: string;
  candidatureId: string;
}

export const FindAll = async (candidateId: string) => {
  return await Solicitation.findAll({
    where: {
      candidateId,
    },
  });
};

export const FindAllSolicitation = async (candidatureId: string) => {
  return await Solicitation.findAll({
    where: {
      candidatureId,
    },
  });
};

export const FindOne = async (id: string) => {
  return Solicitation.findOne({
    where: { id },
  });
};

export const Store = async (model: ISolicitation) => {
  const sysdate = new Date(Date.now());
  return await Solicitation.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ISolicitation) => {
  return await Solicitation.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
