import { FindOne, FindAll } from "@controllers/documents";
import { GraphQLList, GraphQLString } from "graphql";
import { DocumentsType } from "../types";

export const DocumentsQueryResolve = {
  DocumentsList: {
    type: new GraphQLList(DocumentsType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Documents: {
    type: DocumentsType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
