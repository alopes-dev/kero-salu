import { Update } from "@controllers/details";
import { DetailsInput, DetailsType } from "../types";

export const UpdateDetails = {
  type: DetailsType,
  args: {
    input: {
      type: DetailsInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Details } = input;

      if (!id) throw Error("must pass id of Details to update");

      return await Update({
        id,
        ...Details,
      });
    } catch (error) {
      return error.message;
    }
  },
};
