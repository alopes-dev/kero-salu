import { Store } from "@controllers/document-type";
import { DocumentTypesInput, DocumentTypesType } from "../types";

export const CreateDocumentTypes = {
  type: DocumentTypesType,
  args: {
    input: {
      type: DocumentTypesInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
