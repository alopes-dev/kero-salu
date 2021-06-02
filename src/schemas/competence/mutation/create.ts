import { Store } from "@controllers/competence";
import { CompetenceInput, CompetenceType } from "../types";

export const CreateCompetence = {
  type: CompetenceType,
  args: {
    input: {
      type: CompetenceInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
