import { Store } from "@controllers/candidature";
import { CandidatureInput, CandidatureType } from "../types";

export const CreateCandidature = {
  type: CandidatureType,
  args: {
    input: {
      type: CandidatureInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
