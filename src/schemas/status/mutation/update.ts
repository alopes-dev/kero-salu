import { Create, Update, IStatus } from "@controllers/status";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { StatusInput, StatusType } from "../types";

export const UpdateStatus = {
  type: StatusType,
  args: {
    input: {
      type: StatusInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...status } = input;

      if (!id) throw Error("must pass id of status to update");

      return await Update({
        id,
        ...status,
      });
    } catch (error) {
      return error.message;
    }
  },
};
