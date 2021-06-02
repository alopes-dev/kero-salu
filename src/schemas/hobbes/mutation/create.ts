import { Store } from "@controllers/hobbes";
import { HobbesInput, HobbesType } from "../types";

export const CreateHobbes = {
  type: HobbesType,
  args: {
    input: {
      type: HobbesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
