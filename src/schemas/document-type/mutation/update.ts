import { Update } from "@controllers/document-type";
import { DocumentTypesInput, DocumentTypesType } from "../types";

export const UpdateDocumentTypes = {
  type: DocumentTypesType,
  args: {
    input: {
      type: DocumentTypesInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...DocumentTypes } = input;

      if (!id) throw Error("must pass id of DocumentTypes to update");

      return await Update({
        id,
        ...DocumentTypes,
      });
    } catch (error) {
      return error.message;
    }
  },
};
