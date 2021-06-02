import { FindOne, FindAll } from "@controllers/benefit";
import { GraphQLList, GraphQLString } from "graphql";
import { BenefitType } from "../types";

export const BenefitQueryResolve = {
  benefitList: {
    type: new GraphQLList(BenefitType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  benefit: {
    type: BenefitType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
