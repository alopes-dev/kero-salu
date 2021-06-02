import { Update } from "@controllers/documents";
import { DocumentsInput, DocumentsType } from "../types";

export const UpdateDocuments = {
  type: DocumentsType,
  args: {
    input: {
      type: DocumentsInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Documents } = input;

      if (!id) throw Error("must pass id of Documents to update");

      return await Update({
        id,
        ...Documents,
      });
    } catch (error) {
      return error.message;
    }
  },
};
