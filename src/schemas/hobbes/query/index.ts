import { FindOne, FindAll } from "@controllers/hobbes";
import { GraphQLList, GraphQLString } from "graphql";
import { HobbesType } from "../types";

export const HobbesQueryResolve = {
  HobbesList: {
    type: new GraphQLList(HobbesType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  Hobbes: {
    type: HobbesType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
