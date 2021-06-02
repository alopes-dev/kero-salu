import { IVacanciesCompetenceAttributes } from "@kerotypes/index";
import { VacanciesCompetence } from "@models/vacancies-competence";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await VacanciesCompetence.findAll();
};

export const FindOne = async (id: string) => {
  return VacanciesCompetence.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IVacanciesCompetenceAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await VacanciesCompetence.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({
  id,
  ...rest
}: IVacanciesCompetenceAttributes) => {
  return await VacanciesCompetence.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
