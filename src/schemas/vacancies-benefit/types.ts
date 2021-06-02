import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const VacanciesBenefitType = new GraphQLObjectType({
  name: "VacanciesBenefitCollection",
  fields: () => ({
    id: { type: GraphQLString },
    benefitId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
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

export const VacanciesBenefitInput = new GraphQLInputObjectType({
  name: "VacanciesBenefitInput",
  fields: () => ({
    id: { type: GraphQLString },
    benefitId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type VacanciesBenefitArgs = {
  id: string;
};
