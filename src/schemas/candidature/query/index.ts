import { FindOne, FindAll } from "@controllers/candidature";
import { GraphQLList, GraphQLString } from "graphql";
import { CandidatureType } from "../types";

export const CandidatureQueryResolve = {
  CandidatureList: {
    type: new GraphQLList(CandidatureType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Candidature: {
    type: CandidatureType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
