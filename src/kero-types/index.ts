interface ITimestamp {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDocumentsAttributes extends ITimestamp {
  id?: string;
  documentNumber: string;
  documentTypeId: string;
  statusId?: string;
}

export interface IContactAttributes extends ITimestamp {
  id: string;
  phone: string;
  email: string;
  statusId?: string;
}

export interface IUserAccount extends ITimestamp {
  id?: string;
  userName: string;
  email: string;
  emailAlternative?: string;
  password: string;
  photoUrl?: string;
  provider: number;
  personId?: string;
  companyId?: string;
}

export interface IPersonAttributes extends ITimestamp {
  id?: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  isCandidate: number;
  address: string;
  statusId: string;
  userAccount?: IUserAccount;
  document?: IDocumentsAttributes;
  contact?: IContactAttributes;
}

export interface IPersonContactAttributes extends ITimestamp {
  id?: string;
  contactId: string;
  personId: string;
  statusId?: string;
}

export interface IPersonDocumentAttributes extends ITimestamp {
  id?: string;
  documentId: string;
  personId: string;
  statusId?: string;
}

export interface IVacanciesAttributes extends ITimestamp {
  id?: string;
  limitHours: string;
  salary: string;
  limitDate: string;
  isDone: string;
  city: string;
  employerTypeId?: string;
  functionTypeId?: string;
  formationTypeId?: string;
  provinceId: string;
  nationalityId: string;
  experience?: string;
  numVacancies: string;
  details: string;
  officeId: string;
  companyId: string;
  statusId?: string;
  status?: number;
  languages?: Array<string>;
  benefits?: Array<string>;
  competences?: Array<string>;
}

export interface IVacanciesLanguageAttributes extends ITimestamp {
  id?: string;
  languageId: string;
  vacanciesId: string;
  statusId?: string;
}

export interface IVacanciesBenefitAttributes extends ITimestamp {
  id?: string;
  benefitId: string;
  vacanciesId: string;
  statusId?: string;
}

export interface IVacanciesCompetenceAttributes extends ITimestamp {
  id?: string;
  competenceId: string;
  vacanciesId: string;
  statusId?: string;
}
