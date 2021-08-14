import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const HobbesType = new GraphQLObjectType({
  name: "HobbesTypesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const HobbesInput = new GraphQLInputObjectType({
  name: "HobbesInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    candidateId: { type: GraphQLString },
  }),
});

export type HobbesTypesArgs = {
  id: string;
};
