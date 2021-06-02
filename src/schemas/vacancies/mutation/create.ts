import { Store } from "@controllers/vacancies";
import { VacanciesInput, VacanciesType } from "../types";

export const CreateVacancies = {
  type: VacanciesType,
  args: {
    input: {
      type: VacanciesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
