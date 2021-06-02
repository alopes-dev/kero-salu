import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const UserAccountType = new GraphQLObjectType({
  name: "UserAccountCollection",
  fields: () => ({
    id: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
    personId: { type: GraphQLString },
    email: { type: GraphQLString },
    emailAlternative: { type: GraphQLString },
    provider: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
    companyId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const UserAccountInput = new GraphQLInputObjectType({
  name: "UserAccountInput",
  fields: () => ({
    id: { type: GraphQLString },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
    personId: { type: GraphQLString },
    email: { type: GraphQLString },
    emailAlternative: { type: GraphQLString },
    provider: { type: GraphQLString },
    photoUrl: { type: GraphQLString },
    companyId: { type: GraphQLString },
    statusId: { type: GraphQLString },
  }),
});

export type UserAccountTypesArgs = {
  id: string;
};
