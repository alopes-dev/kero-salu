import { FindOne, FindAll } from "@controllers/person-contacts";
import { GraphQLList, GraphQLString } from "graphql";
import { PersonContactType } from "../types";

export const PersonContactQueryResolve = {
  PersonContactList: {
    type: new GraphQLList(PersonContactType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  PersonContact: {
    type: PersonContactType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
