import { Store } from "@controllers/curriculum";
import { CurriculumInput, CurriculumType } from "../types";

export const CreateCurriculum = {
  type: CurriculumType,
  args: {
    input: {
      type: CurriculumInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
