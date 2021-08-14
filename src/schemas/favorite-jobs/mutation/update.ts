import { Update } from "@controllers/favorite-jobs";
import { FavoriteJobsInput, FavoriteJobsType } from "../types";

export const UpdateFavoriteJobs = {
  type: FavoriteJobsType,
  args: {
    input: {
      type: FavoriteJobsInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...FavoriteJobs } = input;

      if (!id) throw Error("must pass id of FavoriteJobs to update");

      return await Update({
        id,
        ...FavoriteJobs,
      });
    } catch (error) {
      return error.message;
    }
  },
};
