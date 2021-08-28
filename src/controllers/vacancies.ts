import { IVacanciesAttributes } from "@kerotypes/index";
import connection from "../conection";
import { Vacancies } from "@models/vacancies";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";
import { Store as addVacanciesLanguage } from "@controllers/vacancies-language";
import { Store as addVacanciesBenefit } from "@controllers/vacancies-benefit";
import { Store as addVacancieCompetence } from "@controllers/vacancies-competence";
import { Store as addVacancieArea } from "@controllers/vacancies-area";
import { Store as notify } from "@controllers/notifications";

export const FindAll = async () => {
  return await Vacancies.findAll({
    where: { status: 1 },
  });
};

export const FindOne = async (id: string) => {
  return Vacancies.findOne({
    where: { id },
  });
};

export const Store = async (model: IVacanciesAttributes) => {
  const t = await connection.transaction();
  const { languages, benefits, competences, areas } = model;

  const sysdate = CurrentDate();
  try {
    const vacancies = await Vacancies.create({
      id: uuid(),
      ...getAttributes(model),
      createdAt: sysdate,
      updatedAt: sysdate,
    });

    const { id } = vacancies;

    languages.forEach(async (languageId) => {
      await addVacanciesLanguage({
        id: uuid(),
        languageId,
        vacanciesId: id,
      });
    });

    benefits.forEach(async (benefitId) => {
      await addVacanciesBenefit({
        id: uuid(),
        benefitId,
        vacanciesId: id,
      });
    });

    competences.forEach(async (competenceId) => {
      await addVacancieCompetence({
        id: uuid(),
        competenceId,
        vacanciesId: id,
      });
    });

    areas.forEach(async (areaId) => {
      await addVacancieArea({
        id: uuid(),
        areaId,
        vacanciesId: id,
      });
    });
    await notify({
      id: uuid(),
      origin: model.companyId,
      distination: "ALL",
      action: "VIEW",
      description: "Uma nova vaga criada",
    });

    await t.commit();

    return vacancies;
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

export const Update = async ({ id, ...rest }: IVacanciesAttributes) => {
  return await Vacancies.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};

export const CancelVacance = async (id: string) => {
  return await Vacancies.update(
    {
      status: 0,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};

const getAttributes = (model: IVacanciesAttributes) => {
  const {
    limitHours,
    salary,
    limitDate,
    isDone,
    showSalary,
    city,
    jobsTypeId,
    functionTypeId,
    formationTypeId,
    provinceId,
    nationalityId,
    experience,
    numVacancies,
    details,
    officeId,
    companyId,
    skills,
    status,
  } = model;

  return {
    limitHours,
    salary,
    limitDate,
    isDone,
    showSalary,
    city,
    jobsTypeId,
    functionTypeId,
    formationTypeId,
    provinceId,
    nationalityId,
    experience,
    numVacancies,
    details,
    skills,
    officeId,
    companyId,
    status,
  };
};
