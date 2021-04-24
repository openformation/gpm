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

import { getProjectName } from "../repository";

export const info = async () => {
  try {
    const project = await getProjectName();

    console.log(
      `You're currently on project "${chalk.green(chalk.bold(project))}"`
    );
  } catch (err) {
    if (err.code === "ENOENT") {
      return console.log(chalk.gray("No project configured."));
    }
    console.error(chalk.red(err.message));
  }
};
