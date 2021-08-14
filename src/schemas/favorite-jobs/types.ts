import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

export const FavoriteJobsType = new GraphQLObjectType({
  name: "FavoriteJobsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const FavoriteJobsInput = new GraphQLInputObjectType({
  name: "FavoriteJobsInput",
  fields: () => ({
    id: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
