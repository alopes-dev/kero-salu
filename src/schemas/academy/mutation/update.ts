import { Update } from "@controllers/academy";
import { AcademyInput, AcademyType } from "../types";

export const UpdateAcademy = {
  type: AcademyType,
  args: {
    input: {
      type: AcademyInput,
    },
  },
  async resolve(_, { input }) {
    try {
      const { id, ...Academy } = input;

      if (!id) throw Error("must pass id of Academy to update");

      return await Update({
        id,
        ...Academy,
      });
    } catch (error) {
      return error.message;
    }
  },
};
