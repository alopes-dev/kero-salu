import { Update } from "@controllers/user-account";
import { UserAccountInput, UserAccountType } from "../types";

export const UpdateUserAccount = {
  type: UserAccountType,
  args: {
    input: {
      type: UserAccountInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...UserAccount } = input;

      if (!id) throw Error("must pass id of UserAccount to update");

      return await Update({
        id,
        ...UserAccount,
      });
    } catch (error) {
      return error.message;
    }
  },
};
