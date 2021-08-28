import { Update } from "@controllers/notifications";
import { NotificationsInput, NotificationsType } from "../types";

export const UpdateNotifications = {
  type: NotificationsType,
  args: {
    input: {
      type: NotificationsInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Notifications } = input;

      if (!id) throw Error("must pass id of Notifications to update");

      return await Update({
        id,
        ...Notifications,
      });
    } catch (error) {
      return error.message;
    }
  },
};
