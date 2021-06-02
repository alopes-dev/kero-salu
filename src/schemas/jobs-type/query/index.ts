import { FindOne, FindAll } from "@controllers/jobs-type";
import { GraphQLList, GraphQLString } from "graphql";
import { JobsTypeType } from "../types";

export const JobsTypeQueryResolve = {
  JobsTypeList: {
    type: new GraphQLList(JobsTypeType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  JobsType: {
    type: JobsTypeType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
