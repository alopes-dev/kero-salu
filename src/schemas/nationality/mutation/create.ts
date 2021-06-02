import { Store } from "@controllers/nationality";
import { NationalityInput, NationalityType } from "../types";

export const CreateNationality = {
  type: NationalityType,
  args: {
    input: {
      type: NationalityInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
