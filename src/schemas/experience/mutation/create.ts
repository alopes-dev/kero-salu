import { Store } from "@controllers/experience";
import { ExperienceInput, ExperienceType } from "../types";

export const CreateExperience = {
  type: ExperienceType,
  args: {
    input: {
      type: ExperienceInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
