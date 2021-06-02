import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const JobsTypeType = new GraphQLObjectType({
  name: "JobsTypeCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const JobsTypeInput = new GraphQLInputObjectType({
  name: "JobsTypeInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export type JobsTypeTypesArgs = {
  id: string;
};
