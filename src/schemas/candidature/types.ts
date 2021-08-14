import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";
import { PersonType } from "@schemas/person/types";
import { VacanciesType } from "@schemas/vacancies/types";
import { FindOne } from "@controllers/person";
import { FindOne as getVacance } from "@controllers/vacancies";

export const CandidatureType = new GraphQLObjectType({
  name: "CandidatureCollection",
  fields: () => ({
    id: { type: GraphQLString },
    isAnalized: { type: GraphQLInt },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    vacance: {
      type: VacanciesType,
      async resolve(prev, args) {
        return await getVacance(prev.vacanciesId);
      },
    },
    candidate: {
      type: PersonType,
      async resolve(prev, args) {
        return await FindOne(prev.candidateId);
      },
    },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CandidatureInput = new GraphQLInputObjectType({
  name: "CandidatureInput",
  fields: () => ({
    id: { type: GraphQLString },
    isAnalized: { type: GraphQLInt },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export const VerifyType = new GraphQLObjectType({
  name: "CandidatureVerifyType",
  fields: () => ({
    already: { type: GraphQLBoolean },
  }),
});
export type CandidatureTypesArgs = {
  id: string;
};
