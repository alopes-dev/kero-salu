import { FindOne, FindAll } from "@controllers/details-type";
import { GraphQLList, GraphQLString } from "graphql";
import { DetailsTypesType } from "../types";

export const DetailsTypesQueryResolve = {
  DetailsTypesList: {
    type: new GraphQLList(DetailsTypesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  DetailsTypes: {
    type: DetailsTypesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
