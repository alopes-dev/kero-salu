import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const NationalityType = new GraphQLObjectType({
  name: "NationalityCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const NationalityInput = new GraphQLInputObjectType({
  name: "NationalityInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export type NationalityTypesArgs = {
  id: string;
};
