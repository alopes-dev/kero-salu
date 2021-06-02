import { Store } from "@controllers/documents";
import { DocumentsInput, DocumentsType } from "../types";

export const CreateDocuments = {
  type: DocumentsType,
  args: {
    input: {
      type: DocumentsInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
