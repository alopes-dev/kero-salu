import { Update } from "@controllers/function-type";
import { FunctionTypesInput, FunctionTypesType } from "../types";

export const UpdateFunctionTypes = {
  type: FunctionTypesType,
  args: {
    input: {
      type: FunctionTypesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...FunctionTypes } = input;

      if (!id) throw Error("must pass id of FunctionTypes to update");

      return await Update({
        id,
        ...FunctionTypes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
