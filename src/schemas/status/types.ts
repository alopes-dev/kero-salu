import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

export const StatusType = new GraphQLObjectType({
  name: "StatusCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const StatusInput = new GraphQLInputObjectType({
  name: "StatusInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type StatusArgs = {
  id: string;
};
