import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from "graphql";

import { FindOne } from "@controllers/function-type";

import { FindOne as getNationality } from "@controllers/nationality";
import { FindOne as getOffice } from "@controllers/office";
import { FindOne as getCompany } from "@controllers/company";
import { FindOne as getProvince } from "@controllers/province";
import { FindOne as getFormationType } from "@controllers/formation-type";
import { FindAllByVacanciesId } from "@controllers/vacancies-area";
import { FunctionTypesType } from "@schemas/function-type/types";
import { OfficeType } from "@schemas/office/types";
import { NationalityType } from "@schemas/nationality/types";
import { CompanyType } from "@schemas/company/types";
import { FormationTypesType } from "@schemas/formation-type/types";
import { ProvinceType } from "@schemas/province/types";
import { VacanciesAreaType } from "@schemas/vacancies-area/types";
import { VacanciesBenefitType } from "@schemas/vacancies-benefit/types";
import { VacanciesBenefit } from "@models/vacancies-benefit";
import { VacanciesCompetenceType } from "@schemas/vacancies-competence/types";
import { VacanciesCompetence } from "@models/vacancies-competence";
import { VacanciesLanguage } from "@models/vacancies-language";
import { VacanciesLanguageType } from "@schemas/vacancies-language/types";
import { UserAccountType } from "@schemas/user-account/types";
import { UserAccount } from "@models/user-account";
import { JobsType } from "@models/jobs-type";
import { JobsTypeType } from "@schemas/jobs-type/types";

export const VacanciesType = new GraphQLObjectType({
  name: "VacanciesCollection",
  fields: () => ({
    id: { type: GraphQLString },
    limitHours: { type: GraphQLString },
    salary: { type: GraphQLString },
    limitDate: { type: GraphQLString },
    isDone: { type: GraphQLString },
    city: { type: GraphQLString },
    employerId: { type: GraphQLString },
    formationTypeId: { type: GraphQLString },
    functionTypeId: { type: GraphQLString },
    provinceId: { type: GraphQLString },
    nationalityId: { type: GraphQLString },
    experience: { type: GraphQLString },
    numVacancies: { type: GraphQLString },
    details: { type: GraphQLString },
    officeId: { type: GraphQLString },
    companyId: { type: GraphQLString },
    jobsTypeId: { type: GraphQLString },
    skills: { type: GraphQLString },
    user: {
      type: UserAccountType,
      async resolve(prev, args) {
        return await UserAccount.findOne({
          where: { companyId: prev.companyId },
        });
      },
    },
    job: {
      type: JobsTypeType,
      async resolve(prev, args) {
        return await JobsType.findOne({
          where: { id: prev.jobsTypeId },
        });
      },
    },
    vacanciesAreas: {
      type: new GraphQLList(VacanciesAreaType),
      async resolve(prev, args) {
        return await FindAllByVacanciesId(prev.id);
      },
    },
    vacanciesCompetences: {
      type: new GraphQLList(VacanciesCompetenceType),
      async resolve(prev, args) {
        return await VacanciesCompetence.findAll({
          where: { vacanciesId: prev.id },
        });
      },
    },
    vacanciesLanguages: {
      type: new GraphQLList(VacanciesLanguageType),
      async resolve(prev, args) {
        return await VacanciesLanguage.findAll({
          where: { vacanciesId: prev.id },
        });
      },
    },
    vacanciesBenefits: {
      type: new GraphQLList(VacanciesBenefitType),
      async resolve(prev, args) {
        return await VacanciesBenefit.findAll({
          where: { vacanciesId: prev.id },
        });
      },
    },
    functionType: {
      type: FunctionTypesType,
      async resolve(prev, args) {
        return await FindOne(prev.functionTypeId);
      },
    },
    company: {
      type: CompanyType,
      async resolve(prev, args) {
        return await getCompany(prev.companyId);
      },
    },
    formationType: {
      type: FormationTypesType,
      async resolve(prev, args) {
        return await getFormationType(prev.formationTypeId);
      },
    },
    office: {
      type: OfficeType,
      async resolve(prev, args) {
        return await getOffice(prev.officeId);
      },
    },
    province: {
      type: ProvinceType,
      async resolve(prev, args) {
        return await getProvince(prev.provinceId);
      },
    },
    nationality: {
      type: NationalityType,
      async resolve(prev, args) {
        return await getNationality(prev.nationalityId);
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export const VacanciesInput = new GraphQLInputObjectType({
  name: "VacanciesInput",
  fields: () => ({
    id: { type: GraphQLString },
    limitHours: { type: GraphQLString },
    salary: { type: GraphQLString },
    limitDate: { type: GraphQLString },
    isDone: { type: GraphQLBoolean },
    city: { type: GraphQLString },
    employerId: { type: GraphQLString },
    formationTypeId: { type: GraphQLString },
    provinceId: { type: GraphQLString },
    nationalityId: { type: GraphQLString },
    experience: { type: GraphQLString },
    numVacancies: { type: GraphQLString },
    jobsTypeId: { type: GraphQLString },
    details: { type: GraphQLString },
    showSalary: { type: GraphQLString },
    skills: { type: GraphQLString },
    officeId: { type: GraphQLString },
    functionTypeId: { type: GraphQLString },
    companyId: { type: GraphQLString },
    contractTypeId: { type: GraphQLString },
    areas: { type: new GraphQLList(GraphQLString) },
    benefits: { type: new GraphQLList(GraphQLString) },
    languages: { type: new GraphQLList(GraphQLString) },
    competences: { type: new GraphQLList(GraphQLString) },
  }),
});
