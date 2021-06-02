import { Update } from "@controllers/curriculum-hobbes";
import { CurriculumHobbesInput, CurriculumHobbesType } from "../types";

export const UpdateCurriculumHobbes = {
  type: CurriculumHobbesType,
  args: {
    input: {
      type: CurriculumHobbesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...CurriculumHobbes } = input;

      if (!id) throw Error("must pass id of CurriculumHobbes to update");

      return await Update({
        id,
        ...CurriculumHobbes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
