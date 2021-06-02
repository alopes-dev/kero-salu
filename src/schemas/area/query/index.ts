import { FindOne, FindAll } from "@controllers/area";
import { GraphQLList, GraphQLString } from "graphql";
import { AreaType } from "../types";

export const AreaQueryResolve = {
  AreaList: {
    type: new GraphQLList(AreaType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Area: {
    type: AreaType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
