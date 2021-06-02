import { FindOne, FindAll } from "@controllers/competence";
import { GraphQLList, GraphQLString } from "graphql";
import { CompetenceType } from "../types";

export const CompetenceQueryResolve = {
  CompetenceList: {
    type: new GraphQLList(CompetenceType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Competence: {
    type: CompetenceType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
