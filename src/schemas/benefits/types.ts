import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import { FindOne } from "@controllers/status";

import { StatusType } from "@schemas/status/types";

export const BenefitType = new GraphQLObjectType({
  name: "benefitsCollection",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const BenefitInput = new GraphQLInputObjectType({
  name: "benefitInput",
  fields: () => ({
    id: { type: GraphQLString },
    designation: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
