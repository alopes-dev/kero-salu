import { Store } from "@controllers/curriculum-evaluation";
import { CurriculumEvaluationInput, CurriculumEvaluationType } from "../types";

export const CreateCurriculumEvaluation = {
  type: CurriculumEvaluationType,
  args: {
    input: {
      type: CurriculumEvaluationInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
