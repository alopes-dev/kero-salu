import { FindOne, FindAll } from "@controllers/curriculum-hobbes";
import { GraphQLList, GraphQLString } from "graphql";
import { CurriculumHobbesType } from "../types";

export const CurriculumHobbesQueryResolve = {
  CurriculumHobbesList: {
    type: new GraphQLList(CurriculumHobbesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  CurriculumHobbes: {
    type: CurriculumHobbesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
