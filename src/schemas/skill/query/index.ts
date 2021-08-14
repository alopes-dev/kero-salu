import { FindOne, FindAll } from "@controllers/skill";
import { GraphQLList, GraphQLString } from "graphql";
import { SkillType } from "../types";

export const SkillQueryResolve = {
  SkillList: {
    type: new GraphQLList(SkillType),
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindAll(args.id);
    },
  },
  Skill: {
    type: SkillType,
    args: { id: { type: GraphQLString } },
    async resolve(_, args) {
      return await FindOne(args.id);
    },
  },
};
