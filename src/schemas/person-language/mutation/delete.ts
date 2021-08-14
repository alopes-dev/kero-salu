import { Delete } from "@controllers/person-language";
import { GraphQLString } from "graphql";
import { PersonLanguageType } from "../types";

export const DeletePersonLanguage = {
  type: PersonLanguageType,
  args: { id: { type: GraphQLString } },
  async resolve(_, { id }) {
    try {
      if (!id) throw Error("must pass id of PersonLanguage to Delete");

      return await Delete(id);
    } catch (error) {
      return error.message;
    }
  },
};
