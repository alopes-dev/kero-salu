import { Update } from "@controllers/person-language";
import { PersonLanguageInput, PersonLanguageType } from "../types";

export const UpdatePersonLanguage = {
  type: PersonLanguageType,
  args: {
    input: {
      type: PersonLanguageInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...PersonLanguage } = input;

      if (!id) throw Error("must pass id of PersonLanguage to update");

      return await Update({
        id,
        ...PersonLanguage,
      });
    } catch (error) {
      return error.message;
    }
  },
};
