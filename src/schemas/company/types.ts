import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const CompanyType = new GraphQLObjectType({
  name: "CompanyCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    nif: { type: GraphQLString },
    socialReason: { type: GraphQLString },
    mission: { type: GraphQLString },
    vision: { type: GraphQLString },
    activitySectorId: { type: GraphQLString },
    phone: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const CompanyInput = new GraphQLInputObjectType({
  name: "CompanyInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    nif: { type: GraphQLString },
    socialReason: { type: GraphQLString },
    mission: { type: GraphQLString },
    vision: { type: GraphQLString },
    activitySectorId: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type CompanyArgs = {
  id: string;
};
