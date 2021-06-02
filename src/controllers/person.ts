import connection from "../conection";
import { Person } from "@models/person";
import { Store as addContact } from "@controllers/contacts";
import { Store as addDocuments } from "@controllers/documents";
import { Store as addPersonContacts } from "@controllers/person-contacts";
import { Store as addPersonDocuments } from "@controllers/person-document";
import { Store as addUsers } from "@controllers/user-account";
import { UserAccount as Users } from "@models/user-account";

import { v4 as uuid } from "uuid";
import { CurrentDate } from "src/utils";
import { IPersonAttributes } from "@kerotypes/index";

export const FindAll = async () => {
  return await Person.findAll();
};

export const FindOne = async (id: string) => {
  return Person.findOne({
    where: { id },
  });
};

export const Store = async (model: IPersonAttributes) => {
  const t = await connection.transaction();
  const {
    firstName,
    lastName,
    address,
    birthDate,
    statusId,
    isCandidate,
    document,
    userAccount,
    contact,
  } = model;
  let contactId = null,
    documentId = null;

  try {
    await checkUserByEmail(contact.email);
    userAccount.email = contact.email;

    if (!!contact)
      contactId = (
        await addContact(
          {
            ...contact,
          },
          t
        )
      ).id;

    if (!!document)
      documentId = (
        await addDocuments(
          {
            ...document,
          },
          t
        )
      ).id;

    const sysdate = CurrentDate();

    const personResponse = await Person.create(
      {
        id: uuid(),
        firstName,
        lastName,
        birthDate,
        address,
        statusId,
        isCandidate,
        createdAt: sysdate,
        updatedAt: sysdate,
      },
      { transaction: t }
    );
    const { id: personId } = personResponse;

    await addPersonContacts({ personId, contactId }, t);

    await addPersonDocuments({ personId, documentId }, t);

    userAccount.userName = firstName + lastName;

    if (userAccount.provider === 1) userAccount.personId = personId;
    else userAccount.companyId = personId;

    await addUsers(userAccount, t);

    await t.commit();
    return personResponse;
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

export const Update = async ({ id, ...rest }: IPersonAttributes) => {
  return await Person.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};

const checkUserByEmail = async (email: string) => {
  const userExists = await Users.findOne({
    where: { email },
  });
  if (userExists) throw new Error("usuário já existente...");
};
