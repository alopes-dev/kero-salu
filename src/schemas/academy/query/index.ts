import { FindOne, FindAll } from "@controllers/academy";
import { GraphQLList, GraphQLString } from "graphql";
import { AcademyType } from "../types";

export const AcademyQueryResolve = {
  AcademyList: {
    type: new GraphQLList(AcademyType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  Academy: {
    type: AcademyType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
