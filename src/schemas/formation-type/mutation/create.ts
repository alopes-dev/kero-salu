import { Store } from "@controllers/formation-type";
import { FormationTypesInput, FormationTypesType } from "../types";

export const CreateFormationTypes = {
  type: FormationTypesType,
  args: {
    input: {
      type: FormationTypesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
