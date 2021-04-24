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

import { add, getProjectName } from "../repository";

export const register = async () => {
  try {
    await add();

    const project = await getProjectName();

    console.log(`Registered "${chalk.bold(chalk.green(project))}" successful.`);
  } catch (err) {
    console.error(chalk.red(err.message));
  }
};
