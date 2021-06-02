import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CurriculumDetailedType = new GraphQLObjectType({
  name: "CurriculumDetailedCollection",
  fields: () => ({
    id: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    detailsId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    curriculum: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.curriculumId);
      },
    },
    details: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.detailsId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CurriculumDetailedInput = new GraphQLInputObjectType({
  name: "CurriculumDetailedInput",
  fields: () => ({
    id: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    detailsId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CurriculumDetailedArgs = {
  id: string;
};
