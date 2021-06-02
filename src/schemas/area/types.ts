import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

export const AreaType = new GraphQLObjectType({
  name: "AreaCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const AreaInput = new GraphQLInputObjectType({
  name: "AreaInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type AreaArgs = {
  id: string;
};
