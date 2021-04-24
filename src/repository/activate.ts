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

import path from "path";

import fs from "fs/promises";

import { gcloudDir, gpmDir } from "./";
import { deactivate } from "./deactivate";

export const activate = async (projectName: string) => {
  await deactivate();

  const source = gcloudDir;
  const destination = path.join(gpmDir, projectName);

  await fs.symlink(destination, source, "dir");
};
