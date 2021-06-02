import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CompetenceType = new GraphQLObjectType({
  name: "CompetenceCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CompetenceInput = new GraphQLInputObjectType({
  name: "CompetenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CompetenceArgs = {
  id: string;
};
