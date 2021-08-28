import { Update } from "@controllers/solicitation";
import { SolicitationInput, SolicitationType } from "../types";

export const UpdateSolicitation = {
  type: SolicitationType,
  args: {
    input: {
      type: SolicitationInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Solicitation } = input;

      if (!id) throw Error("must pass id of Solicitation to update");

      return await Update({
        id,
        ...Solicitation,
      });
    } catch (error) {
      return error.message;
    }
  },
};
