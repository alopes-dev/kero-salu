import { Update } from "@controllers/vacancies-competence";
import { VacanciesCompetenceInput, VacanciesCompetenceType } from "../types";

export const UpdateVacanciesCompetence = {
  type: VacanciesCompetenceType,
  args: {
    input: {
      type: VacanciesCompetenceInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...VacanciesCompetence } = input;

      if (!id) throw Error("must pass id of VacanciesCompetence to update");

      return await Update({
        id,
        ...VacanciesCompetence,
      });
    } catch (error) {
      return error.message;
    }
  },
};
