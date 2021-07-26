import { Update } from "@controllers/candidature";
import { CandidatureInput, CandidatureType } from "../types";

export const UpdateCandidature = {
  type: CandidatureType,
  args: {
    input: {
      type: CandidatureInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Candidature } = input;

      if (!id) throw Error("must pass id of Candidature to update");

      return await Update({
        id,
        ...Candidature,
      });
    } catch (error) {
      return error.message;
    }
  },
};
