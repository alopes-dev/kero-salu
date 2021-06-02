import { FindOne, FindAll } from "@controllers/vacancies-language";
import { GraphQLList, GraphQLString } from "graphql";
import { VacanciesLanguageType } from "../types";

export const VacanciesLanguageQueryResolve = {
  VacanciesLanguageList: {
    type: new GraphQLList(VacanciesLanguageType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  VacanciesLanguage: {
    type: VacanciesLanguageType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
