import { Update } from "@controllers/experience";
import { ExperienceInput, ExperienceType } from "../types";

export const UpdateExperience = {
  type: ExperienceType,
  args: {
    input: {
      type: ExperienceInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Experience } = input;

      if (!id) throw Error("must pass id of Experience to update");

      return await Update({
        id,
        ...Experience,
      });
    } catch (error) {
      return error.message;
    }
  },
};
