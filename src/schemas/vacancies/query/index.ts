import { FindOne, FindAll, CancelVacance } from "@controllers/vacancies";
import { Vacancies } from "@models/vacancies";
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
  VacanciesListByComapyId: {
    type: new GraphQLList(VacanciesType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await Vacancies.findAll({
        where: { status: 1, companyId: args.id },
      });
    },
  },
  CandidatureByVacanciesId: {
    type: VacanciesType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await Vacancies.findOne({
        where: { companyId: args.id },
      });
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
