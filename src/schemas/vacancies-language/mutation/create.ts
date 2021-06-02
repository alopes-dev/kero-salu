import { Store } from "@controllers/vacancies-language";
import { VacanciesLanguageInput, VacanciesLanguageType } from "../types";

export const CreateVacanciesLanguage = {
  type: VacanciesLanguageType,
  args: {
    input: {
      type: VacanciesLanguageInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
