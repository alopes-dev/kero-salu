import { FindOne, FindAll } from "@controllers/nationality";
import { GraphQLList, GraphQLString } from "graphql";
import { NationalityType } from "../types";

export const NationalityQueryResolve = {
  NationalityList: {
    type: new GraphQLList(NationalityType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Nationality: {
    type: NationalityType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
