import { Store, StoreCandidate } from "@controllers/person";
import { PersonInput, PersonType } from "../types";

export const CreatePerson = {
  type: PersonType,
  args: {
    input: {
      type: PersonInput,
    },
  },
  async resolve(_, { input }) {
    return await StoreCandidate(input);
  },
};
