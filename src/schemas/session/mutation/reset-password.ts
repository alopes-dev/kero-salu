import { ResetPassword } from "@controllers/session";
import { SessionInput, SessionType } from "../types";

export const ResetUserInfo = {
  type: SessionType,
  args: {
    input: {
      type: SessionInput,
    },
  },
  async resolve(_, { input }) {
    try {
      return await ResetPassword(input);
    } catch (error) {
      return error.message;
    }
  },
};
