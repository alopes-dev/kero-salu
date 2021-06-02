import { Update } from "@controllers/office";
import { OfficeInput, OfficeType } from "../types";

export const UpdateOffice = {
  type: OfficeType,
  args: {
    input: {
      type: OfficeInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Office } = input;

      if (!id) throw Error("must pass id of Office to update");

      return await Update({
        id,
        ...Office,
      });
    } catch (error) {
      return error.message;
    }
  },
};
