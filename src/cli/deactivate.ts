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

import chalk from "chalk";
import { deactivate as deactivateProject, getProjectName } from "../repository";

export const deactivate = async () => {
  const project = await getProjectName();

  await deactivateProject();

  console.log(chalk.green(`Deactivated "${chalk.bold(project)}".`));
};
