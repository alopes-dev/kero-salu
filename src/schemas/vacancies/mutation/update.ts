import { Update } from "@controllers/vacancies";
import { VacanciesInput, VacanciesType } from "../types";

export const UpdateVacancies = {
  type: VacanciesType,
  args: {
    input: {
      type: VacanciesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Vacancies } = input;

      if (!id) throw Error("must pass id of Vacancies to update");

      return await Update({
        id,
        ...Vacancies,
      });
    } catch (error) {
      return error.message;
    }
  },
};
