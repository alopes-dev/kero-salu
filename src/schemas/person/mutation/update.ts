import { Update } from "@controllers/person";
import { PersonInput, PersonType } from "../types";

export const UpdatePerson = {
  type: PersonType,
  args: {
    input: {
      type: PersonInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Person } = input;

      if (!id) throw Error("must pass id of Person to update");

      return await Update({
        id,
        ...Person,
      });
    } catch (error) {
      return error.message;
    }
  },
};
