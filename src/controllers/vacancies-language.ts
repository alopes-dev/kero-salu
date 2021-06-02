import { IVacanciesLanguageAttributes } from "@kerotypes/index";
import { VacanciesLanguage } from "@models/vacancies-language";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await VacanciesLanguage.findAll();
};

export const FindOne = async (id: string) => {
  return VacanciesLanguage.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IVacanciesLanguageAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await VacanciesLanguage.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IVacanciesLanguageAttributes) => {
  return await VacanciesLanguage.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
