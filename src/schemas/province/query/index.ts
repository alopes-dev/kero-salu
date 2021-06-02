import { FindOne, FindAll } from "@controllers/province";
import { GraphQLList, GraphQLString } from "graphql";
import { ProvinceType } from "../types";

export const ProvinceQueryResolve = {
  ProvinceList: {
    type: new GraphQLList(ProvinceType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Province: {
    type: ProvinceType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
