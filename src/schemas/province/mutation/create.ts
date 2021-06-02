import { Store } from "@controllers/province";
import { ProvinceInput, ProvinceType } from "../types";

export const CreateProvince = {
  type: ProvinceType,
  args: {
    input: {
      type: ProvinceInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
