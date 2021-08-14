import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/language";

import { LanguageType } from "@schemas/language/types";

export const PersonLanguageType = new GraphQLObjectType({
  name: "PersonLanguageCollection",
  fields: () => ({
    id: { type: GraphQLString },
    languageId: { type: GraphQLString },
    personId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    languages: {
      type: LanguageType,
      async resolve(prev, args) {
        return await FindOne(prev.languageId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const PersonLanguageInput = new GraphQLInputObjectType({
  name: "PersonLanguageInput",
  fields: () => ({
    id: { type: GraphQLString },
    languageId: { type: GraphQLString },
    personId: { type: GraphQLString },
    percentage: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type PersonLanguageArgs = {
  id: string;
};
