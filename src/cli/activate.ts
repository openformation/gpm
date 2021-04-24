/**
 * @openformation/gpm
 *
 * Copyright, 2021 - Open Formation GmbH, Hamburg, Germany
 *
 * All rights reserved
 *
 */

/**
 * @author André König <andre.koenig@openformation.io>
 *
 */

import inquirer from "inquirer";
import { list, activate as activateProject } from "../repository";

export const activate = async () => {
  const projects = await list();

  const { project } = await inquirer.prompt([
    {
      type: "list",
      name: "project",
      message: "Which project do you want to select?",
      choices: projects,
    },
  ]);

  await activateProject(project);
};
