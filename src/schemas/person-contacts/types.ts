import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/contacts";

import { ContactsType } from "@schemas/contacts/types";

export const PersonContactType = new GraphQLObjectType({
  name: "PersonContactCollection",
  fields: () => ({
    id: { type: GraphQLString },
    contactId: { type: GraphQLString },
    personId: { type: GraphQLString },
    contact: {
      type: ContactsType,
      async resolve(prev, args) {
        return await FindOne(prev.contactId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const PersonContactInput = new GraphQLInputObjectType({
  name: "PersonContactInput",
  fields: () => ({
    id: { type: GraphQLString },
    contactId: { type: GraphQLString },
    personId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type PersonContactArgs = {
  id: string;
};
