import { Store } from "@controllers/status";
import { StatusInput, StatusType } from "../types";

export const CreateStatus = {
  type: StatusType,
  args: {
    input: {
      type: StatusInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
