import { FindOne, FindAll } from "@controllers/person-language";
import { GraphQLList, GraphQLString } from "graphql";
import { PersonLanguageType } from "../types";

export const PersonLanguageQueryResolve = {
  PersonLanguageList: {
    type: new GraphQLList(PersonLanguageType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  PersonLanguage: {
    type: PersonLanguageType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
