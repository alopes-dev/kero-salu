import { INotificationAttributes } from "@kerotypes/index";
import { Notifications } from "@models/notifications";
import { v4 as uuid } from "uuid";
export interface Inotifications {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Notifications.findAll();
};

export const FindOne = async (id: string) => {
  return Notifications.findOne({
    where: { id },
  });
};

export const Store = async (model: INotificationAttributes) => {
  const sysdate = new Date(Date.now());
  return await Notifications.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const Update = async ({ id, ...rest }: Inotifications) => {
  return await Notifications.update(
    {
      ...rest,
      updatedAt: new Date().toJSON(),
    },
    { where: { id } }
  );
};
