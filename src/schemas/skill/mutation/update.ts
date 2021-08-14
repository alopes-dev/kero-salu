import { Update } from "@controllers/skill";
import { SkillInput, SkillType } from "../types";

export const UpdateSkill = {
  type: SkillType,
  args: {
    input: {
      type: SkillInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Skill } = input;

      if (!id) throw Error("must pass id of Skill to update");

      return await Update({
        id,
        ...Skill,
      });
    } catch (error) {
      return error.message;
    }
  },
};
