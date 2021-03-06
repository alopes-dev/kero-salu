import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/competence";

import { CompetenceType } from "@schemas/competence/types";

export const VacanciesCompetenceType = new GraphQLObjectType({
  name: "VacanciesCompetenceCollection",
  fields: () => ({
    id: { type: GraphQLString },
    competenceId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    competence: {
      type: CompetenceType,
      async resolve(prev, args) {
        return await FindOne(prev.competenceId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const VacanciesCompetenceInput = new GraphQLInputObjectType({
  name: "VacanciesCompetenceInput",
  fields: () => ({
    id: { type: GraphQLString },
    competenceId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type VacanciesCompetenceArgs = {
  id: string;
};
