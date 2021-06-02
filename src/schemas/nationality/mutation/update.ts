import { Update } from "@controllers/nationality";
import { NationalityInput, NationalityType } from "../types";

export const UpdateNationality = {
  type: NationalityType,
  args: {
    input: {
      type: NationalityInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Nationality } = input;

      if (!id) throw Error("must pass id of Nationality to update");

      return await Update({
        id,
        ...Nationality,
      });
    } catch (error) {
      return error.message;
    }
  },
};
