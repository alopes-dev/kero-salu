import {
  FindOne,
  FindAll,
  getFavariteByVacance,
} from "@controllers/favorite-jobs";
import { GraphQLList, GraphQLString } from "graphql";
import { FavoriteJobsType } from "../types";

export const FavoriteJobsQueryResolve = {
  FavoriteJobsList: {
    type: new GraphQLList(FavoriteJobsType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  FavoriteJobs: {
    type: FavoriteJobsType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
  FavoriteJobsOne: {
    type: FavoriteJobsType,
    args: {
      candidateId: { type: GraphQLString },
      vacanciesId: { type: GraphQLString },
    },
    async resolve(_, args) {
      return await getFavariteByVacance(args);
    },
  },
};
