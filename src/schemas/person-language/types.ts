import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const PersonLanguageType = new GraphQLObjectType({
  name: "PersonLanguageCollection",
  fields: () => ({
    id: { type: GraphQLString },
    LanguageId: { type: GraphQLString },
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

export const PersonLanguageInput = new GraphQLInputObjectType({
  name: "PersonLanguageInput",
  fields: () => ({
    id: { type: GraphQLString },
    LanguageId: { type: GraphQLString },
    personId: { type: GraphQLString },
    percentage: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type PersonLanguageArgs = {
  id: string;
};
