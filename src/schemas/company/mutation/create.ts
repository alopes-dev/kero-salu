import { Store } from "@controllers/company";
import { CompanyInput, CompanyType } from "../types";

export const CreateCompany = {
  type: CompanyType,
  args: {
    input: {
      type: CompanyInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
