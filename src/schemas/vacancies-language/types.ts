import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const VacanciesLanguageType = new GraphQLObjectType({
  name: "VacanciesLanguageCollection",
  fields: () => ({
    id: { type: GraphQLString },
    languageId: { type: GraphQLString },
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

export const VacanciesLanguageInput = new GraphQLInputObjectType({
  name: "VacanciesLanguageInput",
  fields: () => ({
    id: { type: GraphQLString },
    languageId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type VacanciesLanguageArgs = {
  id: string;
};
