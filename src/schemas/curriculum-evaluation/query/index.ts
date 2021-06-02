import { FindOne, FindAll } from "@controllers/curriculum-evaluation";
import { GraphQLList, GraphQLString } from "graphql";
import { CurriculumEvaluationType } from "../types";

export const CurriculumEvaluationQueryResolve = {
  CurriculumEvaluationList: {
    type: new GraphQLList(CurriculumEvaluationType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  CurriculumEvaluation: {
    type: CurriculumEvaluationType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
