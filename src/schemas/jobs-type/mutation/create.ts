import { Store } from "@controllers/jobs-type";
import { JobsTypeInput, JobsTypeType } from "../types";

export const CreateJobsType = {
  type: JobsTypeType,
  args: {
    input: {
      type: JobsTypeInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
