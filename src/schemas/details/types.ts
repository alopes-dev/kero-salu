import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const DetailsType = new GraphQLObjectType({
  name: "DetailsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    local: { type: GraphQLString },
    endDate: { type: GraphQLString },
    startDate: { type: GraphQLString },
    detailsTypeId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    detailsType: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.detailsTypeId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const DetailsInput = new GraphQLInputObjectType({
  name: "DetailsInput",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    local: { type: GraphQLString },
    endDate: { type: GraphQLString },
    startDate: { type: GraphQLString },
    detailsTypeId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type DetailsArgs = {
  id: string;
};
