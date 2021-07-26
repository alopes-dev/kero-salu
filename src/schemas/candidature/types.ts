import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";

export const CandidatureType = new GraphQLObjectType({
  name: "CandidatureCollection",
  fields: () => ({
    id: { type: GraphQLString },
    isAnalized: { type: GraphQLInt },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CandidatureInput = new GraphQLInputObjectType({
  name: "CandidatureInput",
  fields: () => ({
    id: { type: GraphQLString },
    isAnalized: { type: GraphQLInt },
    candidateId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    status: { type: GraphQLInt },
  }),
});

export const VerifyType = new GraphQLObjectType({
  name: "CandidatureVerifyType",
  fields: () => ({
    already: { type: GraphQLBoolean },
  }),
});
export type CandidatureTypesArgs = {
  id: string;
};
