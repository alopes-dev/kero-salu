import { Session, RecoverSession } from "@controllers/session";
import { GraphQLString } from "graphql";
import { SessionInput, SessionType } from "../types";

export const StoreSession = {
  type: SessionType,
  args: {
    input: {
      type: SessionInput,
    },
  },
  async resolve(_, { input }) {
    console.log(input);
    return await Session(input);
  },
};

export const RecoverSessions = {
  type: SessionType,
  args: {
    token: { type: GraphQLString },
  },
  async resolve(args, { input }) {
    return await RecoverSession(input.token);
  },
};
