import { FindOne, FindAll } from "@controllers/curriculum";
import { GraphQLList, GraphQLString } from "graphql";
import { CurriculumType } from "../types";

export const CurriculumQueryResolve = {
  CurriculumList: {
    type: new GraphQLList(CurriculumType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Curriculum: {
    type: CurriculumType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
