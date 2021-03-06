require("dotenv").config();
import { UserAccount } from "@models/user-account";
import { CurrentDate } from "src/utils";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface ISession {
  userName: string;
  password: string;
  provider: number;
}

export interface IResetPasswor {
  userName: string;
  password: string;
}

export const Session = async ({ password, provider, userName }: ISession) => {
  try {
    const userExist = await UserAccount.findOne({ where: { userName } });

    if (!userExist) throw new Error("Usuario não encontrado...");

    if (userExist.provider !== provider)
      throw new Error("O seu usuario não tem accesso a está plataforma!!");

    if (!(await bcrypt.compare(password, userExist.password)))
      throw new Error("Senha não corresponde...");

    const user = {
      id: userExist.id,
      userName: userExist.userName,
      email: userExist.email,
      avatarUrl: userExist.photoUrl,
      provider: userExist.provider,
      personId: userExist.personId,
      companyId: userExist.companyId,
    };

    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    return {
      token,
      user,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const RecoverSession = async (token: string) => {
  try {
    const decodeToke = jwt.decode(token, { complete: true });

    const { user } = decodeToke.payload as any;
    const userExist = await UserAccount.findOne({
      where: { userName: user.userName },
    });

    return {
      token,
      user: {
        avatarUrl: userExist.photoUrl,
        companyId: userExist.companyId,
        email: userExist.email,
        personId: userExist.personId,
        provider: userExist.provider,
        userName: userExist.userName,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const ResetPassword = async ({ password, userName }: IResetPasswor) => {
  const userExist = await UserAccount.findOne({ where: { userName } });

  if (!userExist) throw new Error("Usuario não encontrado...");

  const password_hash = await bcrypt.hash(password, 8);

  return await UserAccount.update(
    {
      password: password_hash,
      updatedAt: CurrentDate(),
    },
    { where: { userName } }
  );
};
