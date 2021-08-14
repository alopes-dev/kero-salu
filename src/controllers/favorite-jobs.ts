import { IFavoriteJobsAttributes } from "@kerotypes/index";
import { FavoriteJobs } from "@models/favorite-jobs";
import { Transaction } from "sequelize/types";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

type getFavoritetByVacanciesProps = {
  vacanciesId: string;
  candidateId: string;
};

export const FindAll = async () => {
  return await FavoriteJobs.findAll();
};

export const FindOne = async (id: string) => {
  return FavoriteJobs.findOne({
    where: { id },
  });
};

export const getFavariteByVacance = async ({
  vacanciesId,
  candidateId,
}: getFavoritetByVacanciesProps) => {
  return FavoriteJobs.findOne({
    where: { vacanciesId, candidateId },
  });
};

export const Store = async (
  model: IFavoriteJobsAttributes,
  transaction?: Transaction
) => {
  const sysdate = CurrentDate();
  return await FavoriteJobs.create(
    {
      id: uuid(),
      ...model,
      createdAt: sysdate,
      updatedAt: sysdate,
    },
    { transaction }
  );
};

export const Update = async ({ id, ...rest }: IFavoriteJobsAttributes) => {
  return await FavoriteJobs.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
