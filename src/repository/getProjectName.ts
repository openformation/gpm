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

import VError from "verror";
import path from "path";
import fs from "fs/promises";

import { gcloudDir } from "./";

export const getProjectName = async () => {
  const rawContents = await fs.readFile(
    path.join(gcloudDir, "configurations", "config_default")
  );
  const contents = rawContents.toString();

  const projectConfigurationLine = contents
    .split("\n")
    .find((line) => line.includes("project"));

  if (!projectConfigurationLine) {
    throw new VError(
      `unable to determine the project name of the current configuration`
    );
  }

  const [, projectName] = projectConfigurationLine.split(" = ");

  return projectName;
};
