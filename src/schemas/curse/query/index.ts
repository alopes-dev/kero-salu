import { FindOne, FindAll } from "@controllers/curse";
import { GraphQLList, GraphQLString } from "graphql";
import { CurseType } from "../types";

export const CurseQueryResolve = {
  CurseList: {
    type: new GraphQLList(CurseType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  Curse: {
    type: CurseType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
