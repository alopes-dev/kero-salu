import { Update } from "@controllers/person-contacts";
import { PersonContactInput, PersonContactType } from "../types";

export const UpdatePersonContact = {
  type: PersonContactType,
  args: {
    input: {
      type: PersonContactInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...PersonContact } = input;

      if (!id) throw Error("must pass id of PersonContact to update");

      return await Update({
        id,
        ...PersonContact,
      });
    } catch (error) {
      return error.message;
    }
  },
};
