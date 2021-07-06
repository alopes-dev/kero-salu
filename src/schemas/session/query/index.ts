import { RecoverSession } from "@controllers/session";
import { GraphQLList, GraphQLString } from "graphql";
import { SessionType } from "../types";

export const SessionQueryResolve = {
  RecoverSessions: {
    type: SessionType,
    args: { token: { type: GraphQLString } },
    async resolve(_, args) {
      return await RecoverSession(args.token);
    },
  },
};
