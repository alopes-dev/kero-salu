import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

export const userResponseType = new GraphQLObjectType({
  name: "userResponseType",
  fields: () => ({
    provider: { type: GraphQLInt },
    email: { type: GraphQLString },
    userName: { type: GraphQLString },
    personId: { type: GraphQLString },
    companyId: { type: GraphQLString },
    avatarUrl: { type: GraphQLString },
  }),
});

export const SessionType = new GraphQLObjectType({
  name: "SessionType",
  fields: () => ({
    token: { type: GraphQLString },
    user: { type: userResponseType },
  }),
});

export const SessionInput = new GraphQLInputObjectType({
  name: "SessionInput",
  fields: () => ({
    provider: { type: GraphQLInt },
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
