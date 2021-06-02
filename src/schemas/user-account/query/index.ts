import { FindOne, FindAll } from "@controllers/user-account";
import { GraphQLList, GraphQLString } from "graphql";
import { UserAccountType } from "../types";

export const UserAccountQueryResolve = {
  UserAccountList: {
    type: new GraphQLList(UserAccountType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  UserAccount: {
    type: UserAccountType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
