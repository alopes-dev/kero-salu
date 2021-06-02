import { FindOne, FindAll } from "@controllers/formation-type";
import { GraphQLList, GraphQLString } from "graphql";
import { FormationTypesType } from "../types";

export const FormationTypesQueryResolve = {
  FormationTypesList: {
    type: new GraphQLList(FormationTypesType),
    async resolve(_, __) {
      return await FindAll();
    },
  },
  FormationTypes: {
    type: FormationTypesType,
    args: { Id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
