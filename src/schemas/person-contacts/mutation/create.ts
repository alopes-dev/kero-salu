import { Store } from "@controllers/person-contacts";
import { PersonContactInput, PersonContactType } from "../types";

export const CreatePersonContact = {
  type: PersonContactType,
  args: {
    input: {
      type: PersonContactInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
