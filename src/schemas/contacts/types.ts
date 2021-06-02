import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const ContactsType = new GraphQLObjectType({
  name: "ContactsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    statusId: { type: GraphQLString },
    status: {
      type: StatusType,
      async resolve(prev, args) {
        return await FindOne(prev.statusId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const ContactsInput = new GraphQLInputObjectType({
  name: "ContactsInput",
  fields: () => ({
    id: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type ContactsArgs = {
  id: string;
};
