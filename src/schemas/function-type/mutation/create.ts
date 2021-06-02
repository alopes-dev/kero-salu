import { Store } from "@controllers/function-type";
import { FunctionTypesInput, FunctionTypesType } from "../types";

export const CreateFunctionTypes = {
  type: FunctionTypesType,
  args: {
    input: {
      type: FunctionTypesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
