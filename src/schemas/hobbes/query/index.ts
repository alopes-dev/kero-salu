import { FindOne, FindAll } from "@controllers/hobbes";
import { GraphQLList, GraphQLString } from "graphql";
import { HobbesType } from "../types";

export const HobbesQueryResolve = {
  HobbesList: {
    type: new GraphQLList(HobbesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Hobbes: {
    type: HobbesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
