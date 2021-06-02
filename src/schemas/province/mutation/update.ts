import { Update } from "@controllers/province";
import { ProvinceInput, ProvinceType } from "../types";

export const UpdateProvince = {
  type: ProvinceType,
  args: {
    input: {
      type: ProvinceInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Province } = input;

      if (!id) throw Error("must pass id of Province to update");

      return await Update({
        id,
        ...Province,
      });
    } catch (error) {
      return error.message;
    }
  },
};
