import { Store } from "@controllers/details";
import { DetailsInput, DetailsType } from "../types";

export const CreateDetails = {
  type: DetailsType,
  args: {
    input: {
      type: DetailsInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
