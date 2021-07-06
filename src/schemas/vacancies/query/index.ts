import { FindOne, FindAll, CancelVacance } from "@controllers/vacancies";
import { GraphQLList, GraphQLString } from "graphql";
import { VacanciesType } from "../types";

export const VacanciesQueryResolve = {
  VacanciesList: {
    type: new GraphQLList(VacanciesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Vacancies: {
    type: VacanciesType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
  CancelVacancies: {
    type: VacanciesType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await CancelVacance(args.id);
    },
  },
};
