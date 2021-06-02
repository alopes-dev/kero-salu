import { Store } from "@controllers/language";
import { LanguageInput, LanguageType } from "../types";

export const CreateLanguage = {
  type: LanguageType,
  args: {
    input: {
      type: LanguageInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
