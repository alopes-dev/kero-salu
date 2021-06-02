import { Update } from "@controllers/formation-type";
import { FormationTypesInput, FormationTypesType } from "../types";

export const UpdateFormationTypes = {
  type: FormationTypesType,
  args: {
    input: {
      type: FormationTypesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...FormationTypes } = input;

      if (!id) throw Error("must pass id of FormationTypes to update");

      return await Update({
        id,
        ...FormationTypes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
