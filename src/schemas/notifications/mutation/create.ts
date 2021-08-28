import { Store } from "@controllers/notifications";
import { NotificationsInput, NotificationsType } from "../types";

export const CreateNotifications = {
  type: NotificationsType,
  args: {
    input: {
      type: NotificationsInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
