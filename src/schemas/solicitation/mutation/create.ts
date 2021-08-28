import { Store } from "@controllers/solicitation";
import { SolicitationInput, SolicitationType } from "../types";

export const CreateSolicitation = {
  type: SolicitationType,
  args: {
    input: {
      type: SolicitationInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
