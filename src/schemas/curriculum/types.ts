import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CurriculumType = new GraphQLObjectType({
  name: "CurriculumCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    email: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    resume: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    candidate: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.candidateId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CurriculumInput = new GraphQLInputObjectType({
  name: "CurriculumInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    email: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    resume: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CurriculumArgs = {
  id: string;
};
