import { Store } from "@controllers/person-language";
import { PersonLanguageInput, PersonLanguageType } from "../types";

export const CreatePersonLanguage = {
  type: PersonLanguageType,
  args: {
    input: {
      type: PersonLanguageInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
