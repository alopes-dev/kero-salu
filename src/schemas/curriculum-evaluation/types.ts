import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CurriculumEvaluationType = new GraphQLObjectType({
  name: "CurriculumEvaluationCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    isFavorite: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    vancaciesId: { type: GraphQLString },
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
    vancacies: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.vancaciesId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CurriculumEvaluationInput = new GraphQLInputObjectType({
  name: "CurriculumEvaluationInput",
  fields: () => ({
    id: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    detailsId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CurriculumEvaluationArgs = {
  id: string;
};
