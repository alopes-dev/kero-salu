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
    percentage: { type: GraphQLString },
    description: { type: GraphQLString },
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

export const HobbesInput = new GraphQLInputObjectType({
  name: "HobbesInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    percentage: { type: GraphQLString },
    description: { type: GraphQLString },
    statusId: { type: GraphQLString },
  }),
});

export type HobbesTypesArgs = {
  id: string;
};
