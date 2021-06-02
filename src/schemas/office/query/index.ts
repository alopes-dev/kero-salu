import { FindOne, FindAll } from "@controllers/office";
import { GraphQLList, GraphQLString } from "graphql";
import { OfficeType } from "../types";

export const OfficeQueryResolve = {
  OfficeList: {
    type: new GraphQLList(OfficeType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Office: {
    type: OfficeType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
