import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const VacanciesType = new GraphQLObjectType({
  name: "VacanciesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    limitHours: { type: GraphQLString },
    salary: { type: GraphQLString },
    limitDate: { type: GraphQLString },
    isDone: { type: GraphQLString },
    city: { type: GraphQLString },
    employerId: { type: GraphQLString },
    formationTypeId: { type: GraphQLString },
    provinceId: { type: GraphQLString },
    nationalityId: { type: GraphQLString },
    experience: { type: GraphQLString },
    numVacancies: { type: GraphQLString },
    details: { type: GraphQLString },
    officeId: { type: GraphQLString },
    companyId: { type: GraphQLString },
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

export const VacanciesInput = new GraphQLInputObjectType({
  name: "VacanciesInput",
  fields: () => ({
    id: { type: GraphQLString },
    limitHours: { type: GraphQLString },
    salary: { type: GraphQLString },
    limitDate: { type: GraphQLString },
    isDone: { type: GraphQLBoolean },
    city: { type: GraphQLString },
    employerId: { type: GraphQLString },
    formationTypeId: { type: GraphQLString },
    provinceId: { type: GraphQLString },
    nationalityId: { type: GraphQLString },
    experience: { type: GraphQLString },
    numVacancies: { type: GraphQLString },
    details: { type: GraphQLString },
    officeId: { type: GraphQLString },
    functionTypeId: { type: GraphQLString },
    companyId: { type: GraphQLString },
    benefits: { type: new GraphQLList(GraphQLString) },
    languages: { type: new GraphQLList(GraphQLString) },
    competences: { type: new GraphQLList(GraphQLString) },
  }),
});
