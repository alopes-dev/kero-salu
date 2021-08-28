import {
  FindOne,
  FindAll,
  FindAllSolicitation,
} from "@controllers/solicitation";
import { GraphQLList, GraphQLString } from "graphql";
import { SolicitationType } from "../types";

export const SolicitationQueryResolve = {
  SolicitationList: {
    type: new GraphQLList(SolicitationType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  SolicitationListByCandidature: {
    type: new GraphQLList(SolicitationType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAllSolicitation(args.id);
    },
  },
  Solicitation: {
    type: SolicitationType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
