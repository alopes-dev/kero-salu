import { Update } from "@controllers/curse";
import { CurseInput, CurseType } from "../types";

export const UpdateCurse = {
  type: CurseType,
  args: {
    input: {
      type: CurseInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Curse } = input;

      if (!id) throw Error("must pass id of Curse to update");

      return await Update({
        id,
        ...Curse,
      });
    } catch (error) {
      return error.message;
    }
  },
};
