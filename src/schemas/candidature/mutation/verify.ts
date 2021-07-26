import { VerifyCandidature as Verify } from "@controllers/candidature";
import { CandidatureInput, CandidatureType, VerifyType } from "../types";

export const VerifyCandidature = {
  type: VerifyType,
  args: {
    input: {
      type: CandidatureInput,
    },
  },
  async resolve(_, { input }) {
    return await Verify(input);
  },
};
