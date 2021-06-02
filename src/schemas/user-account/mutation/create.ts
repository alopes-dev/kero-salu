import { Store } from "@controllers/user-account";
import { UserAccountInput, UserAccountType } from "../types";

export const CreateUserAccount = {
  type: UserAccountType,
  args: {
    input: {
      type: UserAccountInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
