import { Update } from "@controllers/contacts";
import { ContactsInput, ContactsType } from "../types";

export const UpdateContacts = {
  type: ContactsType,
  args: {
    input: {
      type: ContactsInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Contacts } = input;

      if (!id) throw Error("must pass id of Contacts to update");

      return await Update({
        id,
        ...Contacts,
      });
    } catch (error) {
      return error.message;
    }
  },
};
