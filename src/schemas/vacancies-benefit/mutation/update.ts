import { Update } from "@controllers/vacancies-benefit";
import { VacanciesBenefitInput, VacanciesBenefitType } from "../types";

export const UpdateVacanciesBenefit = {
  type: VacanciesBenefitType,
  args: {
    input: {
      type: VacanciesBenefitInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...VacanciesBenefit } = input;

      if (!id) throw Error("must pass id of VacanciesBenefit to update");

      return await Update({
        id,
        ...VacanciesBenefit,
      });
    } catch (error) {
      return error.message;
    }
  },
};
