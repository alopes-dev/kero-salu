import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const PersonDocumentType = new GraphQLObjectType({
  name: "PersonDocumentCollection",
  fields: () => ({
    id: { type: GraphQLString },
    DocumentId: { type: GraphQLString },
    personId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const PersonDocumentInput = new GraphQLInputObjectType({
  name: "PersonDocumentInput",
  fields: () => ({
    id: { type: GraphQLString },
    DocumentId: { type: GraphQLString },
    personId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type PersonDocumentArgs = {
  id: string;
};
