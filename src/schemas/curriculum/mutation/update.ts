import { Update } from "@controllers/curriculum";
import { CurriculumInput, CurriculumType } from "../types";

export const UpdateCurriculum = {
  type: CurriculumType,
  args: {
    input: {
      type: CurriculumInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Curriculum } = input;

      if (!id) throw Error("must pass id of Curriculum to update");

      return await Update({
        id,
        ...Curriculum,
      });
    } catch (error) {
      return error.message;
    }
  },
};
