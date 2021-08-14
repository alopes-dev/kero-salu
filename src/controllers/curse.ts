import { Curses } from "@models/curse";
import { v4 as uuid } from "uuid";
export interface ICurses {
  id?: string;
  statusId?: string;
}

export const FindAll = async (candidateId: string) => {
  return await Curses.findAll({
    where: {
      candidateId,
    },
    order: [["endDate", "desc"]],
  });
};

export const FindOne = async (id: string) => {
  return Curses.findOne({
    where: { id },
  });
};

export const Store = async (model: ICurses) => {
  const sysdate = new Date(Date.now());
  return await Curses.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: ICurses) => {
  return await Curses.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
