import { Update } from "@controllers/curriculum-detailed";
import { CurriculumDetailedInput, CurriculumDetailedType } from "../types";

export const UpdateCurriculumDetailed = {
  type: CurriculumDetailedType,
  args: {
    input: {
      type: CurriculumDetailedInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...CurriculumDetailed } = input;

      if (!id) throw Error("must pass id of CurriculumDetailed to update");

      return await Update({
        id,
        ...CurriculumDetailed,
      });
    } catch (error) {
      return error.message;
    }
  },
};
