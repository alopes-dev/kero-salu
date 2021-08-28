import { DocumentTypesType } from "@schemas/document-type/types";

import { DocumentsType } from "@models/documents-type";
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";
import { Candidature } from "@models/candidature";
import { CandidatureType } from "@schemas/candidature/types";

export const SolicitationType = new GraphQLObjectType({
  name: "SolicitationCollection",
  fields: () => ({
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    candidatureId: { type: GraphQLString },
    documentTypeId: { type: GraphQLString },
    fileUrl: { type: GraphQLString },
    documentType: {
      type: DocumentTypesType,
      async resolve(prev, args) {
        return await DocumentsType.findOne({
          where: { id: prev.documentTypeId },
        });
      },
    },
    candidature: {
      type: CandidatureType,
      async resolve(prev, args) {
        return await Candidature.findOne({
          where: { id: prev.candidatureId },
        });
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const SolicitationInput = new GraphQLInputObjectType({
  name: "SolicitationInput",
  fields: () => ({
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    candidateId: { type: GraphQLString },
    candidatureId: { type: GraphQLString },
    documentTypeId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    fileUrl: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
