import { Update } from "@controllers/vacancies-area";
import { VacanciesAreaInput, VacanciesAreaType } from "../types";

export const UpdateVacanciesArea = {
  type: VacanciesAreaType,
  args: {
    input: {
      type: VacanciesAreaInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...VacanciesArea } = input;

      if (!id) throw Error("must pass id of VacanciesArea to update");

      return await Update({
        id,
        ...VacanciesArea,
      });
    } catch (error) {
      return error.message;
    }
  },
};
