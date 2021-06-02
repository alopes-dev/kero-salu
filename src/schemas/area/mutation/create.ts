import { Store } from "@controllers/area";
import { AreaInput, AreaType } from "../types";

export const CreateArea = {
  type: AreaType,
  args: {
    input: {
      type: AreaInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
