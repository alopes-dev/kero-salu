import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const DetailsTypesType = new GraphQLObjectType({
  name: "DetailsTypesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLInt },
    iconType: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const DetailsTypesInput = new GraphQLInputObjectType({
  name: "DetailsTypesInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLInt },
    iconType: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type DetailsTypesArgs = {
  id: string;
};
