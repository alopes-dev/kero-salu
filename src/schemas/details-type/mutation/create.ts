import { Store } from "@controllers/details-type";
import { DetailsTypesInput, DetailsTypesType } from "../types";

export const CreateDetailsTypes = {
  type: DetailsTypesType,
  args: {
    input: {
      type: DetailsTypesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
