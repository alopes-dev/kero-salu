import { FindOne, FindAll } from "@controllers/details";
import { GraphQLList, GraphQLString } from "graphql";
import { DetailsType } from "../types";

export const DetailsQueryResolve = {
  DetailsList: {
    type: new GraphQLList(DetailsType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Details: {
    type: DetailsType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
