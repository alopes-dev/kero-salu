import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const OfficeType = new GraphQLObjectType({
  name: "OfficeCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const OfficeInput = new GraphQLInputObjectType({
  name: "OfficeInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export type OfficeTypesArgs = {
  id: string;
};
