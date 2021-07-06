import { Store } from "@controllers/vacancies-area";
import { VacanciesAreaInput, VacanciesAreaType } from "../types";

export const CreateVacanciesArea = {
  type: VacanciesAreaType,
  args: {
    input: {
      type: VacanciesAreaInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
