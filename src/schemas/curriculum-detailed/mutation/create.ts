import { Store } from "@controllers/curriculum-detailed";
import { CurriculumDetailedInput, CurriculumDetailedType } from "../types";

export const CreateCurriculumDetailed = {
  type: CurriculumDetailedType,
  args: {
    input: {
      type: CurriculumDetailedInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
