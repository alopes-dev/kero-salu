import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

export const SkillType = new GraphQLObjectType({
  name: "SkillCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const SkillInput = new GraphQLInputObjectType({
  name: "SkillInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    resume: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
