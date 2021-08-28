import { CompanyType } from "@schemas/company/types";
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import { FindOne as getCompany } from "@controllers/company";

export const NotificationsType = new GraphQLObjectType({
  name: "NotificationsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    distination: { type: GraphQLString },
    origin: { type: GraphQLString },
    action: { type: GraphQLString },
    status: { type: GraphQLString },
    company: {
      type: CompanyType,
      async resolve(prev, args) {
        return await getCompany(prev.origin);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const NotificationsInput = new GraphQLInputObjectType({
  name: "NotificationsInput",
  fields: () => ({
    id: { type: GraphQLString },
    description: { type: GraphQLString },
    distination: { type: GraphQLString },
    origin: { type: GraphQLString },
    action: { type: GraphQLString },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
