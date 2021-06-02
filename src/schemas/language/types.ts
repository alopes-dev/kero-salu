import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const LanguageType = new GraphQLObjectType({
  name: "LanguageCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const LanguageInput = new GraphQLInputObjectType({
  name: "LanguageInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export type LanguageTypesArgs = {
  id: string;
};
