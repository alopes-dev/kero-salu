import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

export const AcademyType = new GraphQLObjectType({
  name: "AcademyCollection",
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

export const AcademyInput = new GraphQLInputObjectType({
  name: "AcademyInput",
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
