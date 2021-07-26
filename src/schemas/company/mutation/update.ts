import { Update } from "@controllers/company";
import { CompanyInput, CompanyType } from "../types";

export const UpdateCompany = {
  type: CompanyType,
  args: {
    input: {
      type: CompanyInput,
    },
  },
  async resolve(_, { input }) {
    try {
      console.log(input);
      const { id, ...Company } = input;

      if (!id) throw Error("must pass id of Company to update");

      return await Update({
        id,
        ...Company,
      });
    } catch (error) {
      return error.message;
    }
  },
};
