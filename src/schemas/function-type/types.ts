import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { AreaType } from "@schemas/area/types";

export const FunctionTypesType = new GraphQLObjectType({
  name: "FunctionTypesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    areaId: { type: GraphQLString },
    status: { type: GraphQLInt },
    area: {
      type: AreaType,
      async resolve(prev, args) {
        return await FindOne(prev.areaId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const FunctionTypesInput = new GraphQLInputObjectType({
  name: "FunctionTypesInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    areaId: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type FunctionTypesArgs = {
  id: string;
};
