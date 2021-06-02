import { Update } from "@controllers/curriculum-evaluation";
import { CurriculumEvaluationInput, CurriculumEvaluationType } from "../types";

export const UpdateCurriculumEvaluation = {
  type: CurriculumEvaluationType,
  args: {
    input: {
      type: CurriculumEvaluationInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...CurriculumEvaluation } = input;

      if (!id) throw Error("must pass id of CurriculumEvaluation to update");

      return await Update({
        id,
        ...CurriculumEvaluation,
      });
    } catch (error) {
      return error.message;
    }
  },
};
