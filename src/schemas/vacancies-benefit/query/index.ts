import { FindOne, FindAll } from "@controllers/vacancies-benefit";
import { GraphQLList, GraphQLString } from "graphql";
import { VacanciesBenefitType } from "../types";

export const VacanciesBenefitQueryResolve = {
  VacanciesBenefitList: {
    type: new GraphQLList(VacanciesBenefitType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  VacanciesBenefit: {
    type: VacanciesBenefitType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
