import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CurriculumHobbesType = new GraphQLObjectType({
  name: "CurriculumHobbesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    hobbesId: { type: GraphQLString },
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
    hobbes: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.hobbesId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CurriculumHobbesInput = new GraphQLInputObjectType({
  name: "CurriculumHobbesInput",
  fields: () => ({
    id: { type: GraphQLString },
    curriculumId: { type: GraphQLString },
    hobbesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CurriculumHobbesArgs = {
  id: string;
};
