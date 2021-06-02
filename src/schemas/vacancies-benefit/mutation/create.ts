import { Store } from "@controllers/vacancies-benefit";
import { VacanciesBenefitInput, VacanciesBenefitType } from "../types";

export const CreateVacanciesBenefit = {
  type: VacanciesBenefitType,
  args: {
    input: {
      type: VacanciesBenefitInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
