import { FindOne, FindAll } from "@controllers/contacts";
import { GraphQLList, GraphQLString } from "graphql";
import { ContactsType } from "../types";

export const ContactsQueryResolve = {
  ContactsList: {
    type: new GraphQLList(ContactsType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  Contacts: {
    type: ContactsType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
