import { authEN } from "./auth/en";
import { authPL } from "./auth/pl";
import { taskEN } from "./task/en";
import { taskPL } from "./task/pl";
import { coreEN } from "./core/en";
import { corePL } from "./core/pl";

export const resources = {
  en: {
    translation: {
      auth: authEN,
      core: coreEN,
      task: taskEN,
    },
  },
  pl: {
    translation: {
      auth: authPL,
      core: corePL,
      task: taskPL,
    },
  },
};
