import { Company } from "@models/company";
import { v4 as uuid } from "uuid";
import connection from "../conection";
import { Store as addUsers } from "@controllers/user-account";
import { ICompanyAttributes } from "@kerotypes/index";
import { CurrentDate } from "src/utils";
import { checkUserByEmail } from "./person";

export interface ICompany {
  id?: string;
  statusId?: string;
}

export const FindAll = async () => {
  return await Company.findAll();
};

export const FindOne = async (id: string) => {
  return Company.findOne({
    where: { id },
  });
};

export const Store = async (model: ICompanyAttributes) => {
  const t = await connection.transaction();
  try {
    const { email, password, ...restOfModel } = model;
    await checkUserByEmail(email);
    const sysdate = CurrentDate();

    const res = await Company.create(
      {
        id: uuid(),
        ...restOfModel,
        createdAt: sysdate,
        updatedAt: sysdate,
      },
      { transaction: t }
    );

    const { id } = res;

    await addUsers(
      {
        userName: email,
        email,
        password,
        provider: 0,
        companyId: id,
      },
      t
    );
    await t.commit();
    return res;
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

export const Update = async ({ id, ...rest }: ICompany) => {
  return await Company.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
