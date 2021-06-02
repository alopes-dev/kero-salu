import { FindOne, FindAll } from "@controllers/status";
import { GraphQLList, GraphQLString } from "graphql";
import { StatusArgs, StatusType } from "../types";

export const StatusQueryResolve = {
  statusList: {
    type: new GraphQLList(StatusType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  status: {
    type: StatusType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
