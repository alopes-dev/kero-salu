import { Store } from "@controllers/benefit";
import { BenefitType, BenefitInput } from "@schemas/benefits/types";

export const CreateBenefit = {
  type: BenefitType,
  args: {
    input: {
      type: BenefitInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
