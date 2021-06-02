import { Store } from "@controllers/curriculum-hobbes";
import { CurriculumHobbesInput, CurriculumHobbesType } from "../types";

export const CreateCurriculumHobbes = {
  type: CurriculumHobbesType,
  args: {
    input: {
      type: CurriculumHobbesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
