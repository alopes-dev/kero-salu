import { FindOne, FindAll } from "@controllers/vacancies-competence";
import { GraphQLList, GraphQLString } from "graphql";
import { VacanciesCompetenceType } from "../types";

export const VacanciesCompetenceQueryResolve = {
  VacanciesCompetenceList: {
    type: new GraphQLList(VacanciesCompetenceType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  VacanciesCompetence: {
    type: VacanciesCompetenceType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
