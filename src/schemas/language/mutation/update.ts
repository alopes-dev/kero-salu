import { Update } from "@controllers/language";
import { LanguageInput, LanguageType } from "../types";

export const UpdateLanguage = {
  type: LanguageType,
  args: {
    input: {
      type: LanguageInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Language } = input;

      if (!id) throw Error("must pass id of Language to update");

      return await Update({
        id,
        ...Language,
      });
    } catch (error) {
      return error.message;
    }
  },
};
