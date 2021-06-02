import { Store } from "@controllers/person-document";
import { PersonDocumentInput, PersonDocumentType } from "../types";

export const CreatePersonDocument = {
  type: PersonDocumentType,
  args: {
    input: {
      type: PersonDocumentInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
