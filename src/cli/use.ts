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

import { activate, list, readRc } from "../repository";

export const use = async () => {
  try {
    const project = await readRc();

    if (!project) {
      console.log(
        chalk.yellow(
          "No project configured. Please make sure that you have a `.gpmrc` placed in the current directory."
        )
      );

      return;
    }

    const projects = await list();

    const exists = projects.find((p) => p === project);

    if (!exists) {
      console.log(
        chalk.red(
          `You don't have the project "${chalk.bold(
            project
          )}" registered via "gpm". Please init your local "gcloud" against this project and perform "gpm register" afterwards.`
        )
      );

      return;
    }

    await activate(project);

    console.log(chalk.green(`Activated "${chalk.bold(project)}".`));
  } catch (err) {
    console.error(chalk.red(err.message));
  }
};
