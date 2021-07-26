import { ICandidatureAttributes } from "@kerotypes/index";
import { Candidature } from "@models/candidature";
import { FindOne as getPerson } from "@controllers/person";
import { CurrentDate } from "src/utils";
import { v4 as uuid } from "uuid";

export interface ICandidature {
  id?: string;
  candidateId?: string;
}

export const FindAll = async () => {
  return await Candidature.findAll();
};

export const FindOne = async (id: string) => {
  return Candidature.findOne({
    where: { id },
  });
};

export const Store = async (model: ICandidatureAttributes) => {
  const sysdate = new Date(Date.now());
  const existPerson = await getPerson(model.candidateId);

  if (!existPerson) throw Error("Candidato não existe, verifique...");

  const existCandidture = await Candidature.findOne({
    where: { vacanciesId: model.vacanciesId },
  });
  if (existCandidture) {
    if (existCandidture.candidateId === model.candidateId)
      throw Error("Não é permitido se candidatar mais de uma vez numa vaga...");
  }

  return await Candidature.create({
    id: uuid(),
    ...model,
    createdAt: sysdate,
    updatedAt: sysdate,
  });
};

export const VerifyCandidature = async (model: ICandidatureAttributes) => {
  const existCandidture = await Candidature.findOne({
    where: { vacanciesId: model.vacanciesId },
  });
  if (existCandidture) {
    if (existCandidture.candidateId === model.candidateId)
      return { already: true };
  }

  return { already: false };
};

export const Update = async ({ id, ...rest }: ICandidatureAttributes) => {
  return await Candidature.update(
    {
      ...rest,
      updatedAt: CurrentDate(),
    },
    { where: { id } }
  );
};
