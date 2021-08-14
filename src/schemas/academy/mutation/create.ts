import { Store } from "@controllers/academy";
import { AcademyInput, AcademyType } from "../types";

export const CreateAcademy = {
  type: AcademyType,
  args: {
    input: {
      type: AcademyInput,
    },
  },
  async resolve(_, { input }) {
    return await Store(input);
  },
};
