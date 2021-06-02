import { FindOne, FindAll } from "@controllers/function-type";
import { GraphQLList, GraphQLString } from "graphql";
import { FunctionTypesType } from "../types";

export const FunctionTypesQueryResolve = {
  FunctionTypesList: {
    type: new GraphQLList(FunctionTypesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  FunctionTypes: {
    type: FunctionTypesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
