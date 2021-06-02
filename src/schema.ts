import {
  AreaMutation,
  AreaQueryResolve,
  BenefitMutation,
  BenefitQueryResolve,
  CompanyMutation,
  CompanyQueryResolve,
  CompetenceMutation,
  CompetenceQueryResolve,
  ContactsMutation,
  ContactsQueryResolve,
  StatusMutation,
  StatusQueryResolve,
  CurriculumDetailedMutation,
  CurriculumDetailedQueryResolve,
  CurriculumEvaluationMutation,
  CurriculumEvaluationQueryResolve,
  CurriculumMutation,
  CurriculumQueryResolve,
  CurriculumHobbesMutation,
  CurriculumHobbesQueryResolve,
  DetailsQueryResolve,
  DetailsMutation,
  DetailsTypesMutation,
  DetailsTypesQueryResolve,
  DocumentsMutation,
  DocumentsQueryResolve,
  DocumentTypesMutation,
  DocumentTypesQueryResolve,
  HobbesQueryResolve,
  HobbesMutation,
  FormationTypesQueryResolve,
  FormationTypesMutation,
  JobsTypeMutation,
  JobsTypeQueryResolve,
  LanguageMutation,
  LanguageQueryResolve,
  NationalityMutation,
  NationalityQueryResolve,
  OfficeMutation,
  OfficeQueryResolve,
  PersonMutation,
  PersonQueryResolve,
  PersonContactMutation,
  PersonContactQueryResolve,
  PersonDocumentMutation,
  PersonDocumentQueryResolve,
  PersonLanguageMutation,
  PersonLanguageQueryResolve,
  ProvinceMutation,
  ProvinceQueryResolve,
  UserAccountMutation,
  UserAccountQueryResolve,
  VacanciesMutation,
  VacanciesQueryResolve,
  VacanciesBenefitMutation,
  VacanciesBenefitQueryResolve,
  VacanciesCompetenceMutation,
  VacanciesCompetenceQueryResolve,
  FunctionTypesQueryResolve,
  FunctionTypesMutation,
  VacanciesLanguageMutation,
  VacanciesLanguageQueryResolve,
} from "@schemas/index";

export const Query = {
  ...FunctionTypesQueryResolve,
  ...VacanciesLanguageQueryResolve,
  ...VacanciesCompetenceQueryResolve,
  ...VacanciesBenefitQueryResolve,
  ...VacanciesQueryResolve,
  ...UserAccountQueryResolve,
  ...ProvinceQueryResolve,
  ...PersonLanguageQueryResolve,
  ...PersonDocumentQueryResolve,
  ...PersonContactQueryResolve,
  ...PersonQueryResolve,
  ...NationalityQueryResolve,
  ...OfficeQueryResolve,
  ...JobsTypeQueryResolve,
  ...LanguageQueryResolve,
  ...HobbesQueryResolve,
  ...FormationTypesQueryResolve,
  ...DocumentsQueryResolve,
  ...CurriculumQueryResolve,
  ...DocumentTypesQueryResolve,
  ...DetailsQueryResolve,
  ...CurriculumDetailedQueryResolve,
  ...CurriculumEvaluationQueryResolve,
  ...CurriculumHobbesQueryResolve,
  ...AreaQueryResolve,
  ...StatusQueryResolve,
  ...BenefitQueryResolve,
  ...CompanyQueryResolve,
  ...CompetenceQueryResolve,
  ...ContactsQueryResolve,
  ...DetailsTypesQueryResolve,
};

export const Mutation = {
  ...FunctionTypesMutation,
  ...VacanciesLanguageMutation,
  ...VacanciesCompetenceMutation,
  ...VacanciesBenefitMutation,
  ...VacanciesMutation,
  ...UserAccountMutation,
  ...ProvinceMutation,
  ...PersonLanguageMutation,
  ...PersonDocumentMutation,
  ...PersonContactMutation,
  ...PersonMutation,
  ...OfficeMutation,
  ...NationalityMutation,
  ...JobsTypeMutation,
  ...LanguageMutation,
  ...HobbesMutation,
  ...FormationTypesMutation,
  ...DocumentsMutation,
  ...AreaMutation,
  ...StatusMutation,
  ...DocumentTypesMutation,
  ...CompanyMutation,
  ...BenefitMutation,
  ...DetailsMutation,
  ...CurriculumDetailedMutation,
  ...CurriculumEvaluationMutation,
  ...CurriculumMutation,
  ...CurriculumHobbesMutation,
  ...CompetenceMutation,
  ...ContactsMutation,
  ...DetailsTypesMutation,
};
