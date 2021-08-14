import { FindOne, FindAll } from "@controllers/experience";
import { GraphQLList, GraphQLString } from "graphql";
import { ExperienceType } from "../types";

export const ExperienceQueryResolve = {
  ExperienceList: {
    type: new GraphQLList(ExperienceType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  Experience: {
    type: ExperienceType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
