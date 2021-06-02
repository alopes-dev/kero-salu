import { FindOne, FindAll } from "@controllers/language";
import { GraphQLList, GraphQLString } from "graphql";
import { LanguageType } from "../types";

export const LanguageQueryResolve = {
  LanguageList: {
    type: new GraphQLList(LanguageType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Language: {
    type: LanguageType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
