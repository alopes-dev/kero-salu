import { Store } from "@controllers/curse";
import { CurseInput, CurseType } from "../types";

export const CreateCurse = {
  type: CurseType,
  args: {
    input: {
      type: CurseInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
