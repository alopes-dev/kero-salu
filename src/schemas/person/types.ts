import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";
import { ContactsInput } from "@schemas/contacts/types";
import { DocumentsInput } from "@schemas/documents/types";
import { UserAccountInput } from "@schemas/user-account/types";

export const PersonType = new GraphQLObjectType({
  name: "PersonCollection",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    isCandidate: { type: GraphQLBoolean },
    address: { type: GraphQLString },
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

export const PersonInput = new GraphQLInputObjectType({
  name: "PersonInput",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    isCandidate: { type: GraphQLInt },
    address: { type: GraphQLString },
    statusId: { type: GraphQLString },
    document: { type: DocumentsInput },
    contact: { type: ContactsInput },
    userAccount: { type: UserAccountInput },
  }),
});

export type PersonTypesArgs = {
  id: string;
};
