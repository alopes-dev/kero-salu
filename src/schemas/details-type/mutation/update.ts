import { Update } from "@controllers/details-type";
import { DetailsTypesInput, DetailsTypesType } from "../types";

export const UpdateDetailsTypes = {
  type: DetailsTypesType,
  args: {
    input: {
      type: DetailsTypesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...DetailsTypes } = input;

      if (!id) throw Error("must pass id of DetailsTypes to update");

      return await Update({
        id,
        ...DetailsTypes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
