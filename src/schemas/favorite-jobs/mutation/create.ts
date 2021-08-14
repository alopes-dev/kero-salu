import { Store } from "@controllers/favorite-jobs";
import { FavoriteJobsInput, FavoriteJobsType } from "../types";

export const CreateFavoriteJobs = {
  type: FavoriteJobsType,
  args: {
    input: {
      type: FavoriteJobsInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
