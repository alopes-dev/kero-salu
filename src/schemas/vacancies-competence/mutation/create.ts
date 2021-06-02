import { Store } from "@controllers/vacancies-competence";
import { VacanciesCompetenceInput, VacanciesCompetenceType } from "../types";

export const CreateVacanciesCompetence = {
  type: VacanciesCompetenceType,
  args: {
    input: {
      type: VacanciesCompetenceInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
