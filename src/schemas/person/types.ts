import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} from "graphql";

import { FindAll } from "@controllers/experience";
import { FindAll as getCurses } from "@controllers/curse";
import { FindAll as getAcademies } from "@controllers/academy";
import { FindAll as getSkills } from "@controllers/skill";
import { FindAll as getHobbes } from "@controllers/hobbes";
import { FindAll as getPersonLanguage } from "@controllers/person-language";
import { FindAllPersonContacts } from "@controllers/person-contacts";
import { UserAccount } from "@models/user-account";
import { ContactsInput } from "@schemas/contacts/types";
import { DocumentsInput } from "@schemas/documents/types";
import { UserAccountInput, UserAccountType } from "@schemas/user-account/types";
import { ExperienceType } from "@schemas/experience/types";
import { PersonLanguageType } from "@schemas/person-language/types";
import { PersonContactType } from "@schemas/person-contacts/types";
import { CurseType } from "@schemas/curse/types";
import { AcademyType } from "@schemas/academy/types";
import { SessionType } from "@schemas/session/types";
import { SkillType } from "@schemas/skill/types";
import { HobbesType } from "@schemas/hobbes/types";

export const PersonType = new GraphQLObjectType({
  name: "PersonCollection",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    isCandidate: { type: GraphQLBoolean },
    address: { type: GraphQLString },
    user: {
      type: UserAccountType,
      async resolve(prev, args) {
        return await UserAccount.findOne({
          where: { personId: prev.id },
        });
      },
    },
    experiences: {
      type: GraphQLList(ExperienceType),
      async resolve(prev, args) {
        return await FindAll(prev.id);
      },
    },
    skills: {
      type: GraphQLList(SkillType),
      async resolve(prev, args) {
        return await getSkills(prev.id);
      },
    },
    hobbes: {
      type: GraphQLList(HobbesType),
      async resolve(prev, args) {
        return await getHobbes(prev.id);
      },
    },
    curses: {
      type: GraphQLList(CurseType),
      async resolve(prev, args) {
        return await getCurses(prev.id);
      },
    },
    academies: {
      type: GraphQLList(AcademyType),
      async resolve(prev, args) {
        return await getAcademies(prev.id);
      },
    },
    languages: {
      type: GraphQLList(PersonLanguageType),
      async resolve(prev, args) {
        return await getPersonLanguage(prev.id);
      },
    },
    candidateContact: {
      type: GraphQLList(PersonContactType),
      async resolve(prev, args) {
        return await FindAllPersonContacts(prev.id);
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
