import { Store } from "@controllers/contacts";
import { ContactsInput, ContactsType } from "../types";

export const CreateContacts = {
  type: ContactsType,
  args: {
    input: {
      type: ContactsInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
