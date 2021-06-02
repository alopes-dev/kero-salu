import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const DocumentsType = new GraphQLObjectType({
  name: "DocumentsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    documentNumber: { type: GraphQLString },
    documentTypeId: { type: GraphQLString },
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

export const DocumentsInput = new GraphQLInputObjectType({
  name: "DocumentsInput",
  fields: () => ({
    id: { type: GraphQLString },
    documentNumber: { type: GraphQLString },
    documentTypeId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type DocumentsArgs = {
  id: string;
};
