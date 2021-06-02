import { Update } from "@controllers/competence";
import { CompetenceInput, CompetenceType } from "../types";

export const UpdateCompetence = {
  type: CompetenceType,
  args: {
    input: {
      type: CompetenceInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Competence } = input;

      if (!id) throw Error("must pass id of Competence to update");

      return await Update({
        id,
        ...Competence,
      });
    } catch (error) {
      return error.message;
    }
  },
};
