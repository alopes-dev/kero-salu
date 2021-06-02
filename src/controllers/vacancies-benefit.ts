import { IVacanciesBenefitAttributes } from "@kerotypes/index";
import { VacanciesBenefit } from "@models/vacancies-benefit";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export const FindAll = async () => {
  return await VacanciesBenefit.findAll();
};

export const FindOne = async (id: string) => {
  return VacanciesBenefit.findOne({
    where: { id },
  });
};

export const Store = async (
  model: IVacanciesBenefitAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await VacanciesBenefit.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IVacanciesBenefitAttributes) => {
  return await VacanciesBenefit.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
