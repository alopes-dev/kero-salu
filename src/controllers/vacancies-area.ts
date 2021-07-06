import { IVacanciesAreaAttributes } from "@kerotypes/index";
import { VacanciesArea } from "@models/vacancies-area";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await VacanciesArea.findAll();
};

export const FindAllByVacanciesId = async (id: string) => {
  return await VacanciesArea.findAll({
    where: { vacanciesId: id },
  });
};

export const FindOne = async (id: string) => {
  return VacanciesArea.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IVacanciesAreaAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await VacanciesArea.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IVacanciesAreaAttributes) => {
  return await VacanciesArea.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
