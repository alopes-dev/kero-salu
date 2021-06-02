import { Update } from "@controllers/jobs-type";
import { JobsTypeInput, JobsTypeType } from "../types";

export const UpdateJobsType = {
  type: JobsTypeType,
  args: {
    input: {
      type: JobsTypeInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...JobsType } = input;

      if (!id) throw Error("must pass id of JobsType to update");

      return await Update({
        id,
        ...JobsType,
      });
    } catch (error) {
      return error.message;
    }
  },
};
