import { FindOne, FindAll } from "@controllers/company";
import { GraphQLList, GraphQLString } from "graphql";
import { CompanyType } from "../types";

export const CompanyQueryResolve = {
  CompanyList: {
    type: new GraphQLList(CompanyType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Company: {
    type: CompanyType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
