import { Update } from "@controllers/vacancies-language";
import { VacanciesLanguageInput, VacanciesLanguageType } from "../types";

export const UpdateVacanciesLanguage = {
  type: VacanciesLanguageType,
  args: {
    input: {
      type: VacanciesLanguageInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...VacanciesLanguage } = input;

      if (!id) throw Error("must pass id of VacanciesLanguage to update");

      return await Update({
        id,
        ...VacanciesLanguage,
      });
    } catch (error) {
      return error.message;
    }
  },
};
