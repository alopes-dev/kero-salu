import { FindOne, FindAll } from "@controllers/vacancies-area";
import { GraphQLList, GraphQLString } from "graphql";
import { VacanciesAreaType } from "../types";

export const VacanciesAreaQueryResolve = {
  VacanciesAreaList: {
    type: new GraphQLList(VacanciesAreaType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  VacanciesArea: {
    type: VacanciesAreaType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
