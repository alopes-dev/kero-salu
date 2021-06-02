import { FindOne, FindAll } from "@controllers/person-document";
import { GraphQLList, GraphQLString } from "graphql";
import { PersonDocumentType } from "../types";

export const PersonDocumentQueryResolve = {
  PersonDocumentList: {
    type: new GraphQLList(PersonDocumentType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  PersonDocument: {
    type: PersonDocumentType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
