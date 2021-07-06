import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from "graphql";

import { FindOne } from "@controllers/area";

import { AreaType } from "@schemas/area/types";

export const VacanciesAreaType = new GraphQLObjectType({
  name: "VacanciesAreaCollection",
  fields: () => ({
    id: { type: GraphQLString },
    areaId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    area: {
      type: AreaType,
      async resolve(prev, args) {
        return await FindOne(prev.areaId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const VacanciesAreaInput = new GraphQLInputObjectType({
  name: "VacanciesAreaInput",
  fields: () => ({
    id: { type: GraphQLString },
    areaId: { type: GraphQLString },
    vacanciesId: { type: GraphQLString },
    statusId: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export type VacanciesAreaArgs = {
  id: string;
};
