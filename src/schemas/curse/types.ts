import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

export const CurseType = new GraphQLObjectType({
  name: "CurseCollection",
  fields: () => ({
    id: { type: GraphQLString },
    untillNow: { type: GraphQLInt },
    institute: { type: GraphQLString },
    title: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CurseInput = new GraphQLInputObjectType({
  name: "CurseInput",
  fields: () => ({
    id: { type: GraphQLString },
    untillNow: { type: GraphQLInt },
    institute: { type: GraphQLString },
    title: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
