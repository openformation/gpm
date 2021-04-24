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
import fs from "fs";

import { gcloudDir } from "../repository";

export const hasConfiguredGcloudProject = () => {
  try {
    fs.statSync(gcloudDir);
  } catch (err) {
    const out = (msg: string) => console.error(chalk.red(msg));

    if ("ENOENT" === err.code) {
      out(
        `You haven't configured any Google Cloud Project yet. Make sure you performed a "gcloud init" before for configuring at least one project and then run "gpm" again.`
      );
    } else {
      out(err.message);
    }

    process.exit(1);
  }
};
