import { FindOne, FindAll } from "@controllers/curriculum-detailed";
import { GraphQLList, GraphQLString } from "graphql";
import { CurriculumDetailedType } from "../types";

export const CurriculumDetailedQueryResolve = {
  CurriculumDetailedList: {
    type: new GraphQLList(CurriculumDetailedType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  CurriculumDetailed: {
    type: CurriculumDetailedType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
