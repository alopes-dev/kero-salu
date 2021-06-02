import { Update } from "@controllers/status";
import { BenefitInput, BenefitType } from "@schemas/benefits/types";

export const UpdateBenefit = {
  type: BenefitType,
  args: {
    input: {
      type: BenefitInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...status } = input;

      if (!id) throw Error("must pass id of status to update");

      return await Update({
        id,
        ...status,
      });
    } catch (error) {
      return error.message;
    }
  },
};
