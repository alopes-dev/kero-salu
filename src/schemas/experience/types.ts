import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

export const ExperienceType = new GraphQLObjectType({
  name: "ExperienceCollection",
  fields: () => ({
    id: { type: GraphQLString },
    untillNow: { type: GraphQLInt },
    company: { type: GraphQLString },
    job: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const ExperienceInput = new GraphQLInputObjectType({
  name: "ExperienceInput",
  fields: () => ({
    id: { type: GraphQLString },
    untillNow: { type: GraphQLInt },
    company: { type: GraphQLString },
    job: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
