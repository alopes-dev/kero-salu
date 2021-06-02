import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const PersonContactType = new GraphQLObjectType({
  name: "PersonContactCollection",
  fields: () => ({
    id: { type: GraphQLString },
    contactId: { type: GraphQLString },
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

export const PersonContactInput = new GraphQLInputObjectType({
  name: "PersonContactInput",
  fields: () => ({
    id: { type: GraphQLString },
    contactId: { type: GraphQLString },
    personId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type PersonContactArgs = {
  id: string;
};
