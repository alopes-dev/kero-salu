import { Update } from "@controllers/area";
import { AreaInput, AreaType } from "../types";

export const UpdateArea = {
  type: AreaType,
  args: {
    input: {
      type: AreaInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Area } = input;

      if (!id) throw Error("must pass id of Area to update");

      return await Update({
        id,
        ...Area,
      });
    } catch (error) {
      return error.message;
    }
  },
};
