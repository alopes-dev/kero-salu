import { Update } from "@controllers/hobbes";
import { HobbesInput, HobbesType } from "../types";

export const UpdateHobbes = {
  type: HobbesType,
  args: {
    input: {
      type: HobbesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Hobbes } = input;

      if (!id) throw Error("must pass id of Hobbes to update");

      return await Update({
        id,
        ...Hobbes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
