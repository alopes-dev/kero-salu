import { Update } from "@controllers/person-document";
import { PersonDocumentInput, PersonDocumentType } from "../types";

export const UpdatePersonDocument = {
  type: PersonDocumentType,
  args: {
    input: {
      type: PersonDocumentInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...PersonDocument } = input;

      if (!id) throw Error("must pass id of PersonDocument to update");

      return await Update({
        id,
        ...PersonDocument,
      });
    } catch (error) {
      return error.message;
    }
  },
};
