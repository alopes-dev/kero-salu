import { FindOne, FindAll } from "@controllers/person";
import { GraphQLList, GraphQLString } from "graphql";
import { PersonType } from "../types";

export const PersonQueryResolve = {
  PersonList: {
    type: new GraphQLList(PersonType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Person: {
    type: PersonType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
