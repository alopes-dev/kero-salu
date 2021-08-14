import { Store } from "@controllers/skill";
import { SkillInput, SkillType } from "../types";

export const CreateSkill = {
  type: SkillType,
  args: {
    input: {
      type: SkillInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
