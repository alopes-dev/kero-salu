import { FindOne, FindAll } from "@controllers/document-type";
import { GraphQLList, GraphQLString } from "graphql";
import { DocumentTypesType } from "../types";

export const DocumentTypesQueryResolve = {
  DocumentTypesList: {
    type: new GraphQLList(DocumentTypesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  DocumentTypes: {
    type: DocumentTypesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
