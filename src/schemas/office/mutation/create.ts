import { Store } from "@controllers/office";
import { OfficeInput, OfficeType } from "../types";

export const CreateOffice = {
  type: OfficeType,
  args: {
    input: {
      type: OfficeInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
