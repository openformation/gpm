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
import VError from "verror";

export const readRc = async () => {
  try {
    const contents = await fs.readFile(path.join(process.cwd(), ".gpmrc"));
    const project = contents.toString();

    return project;
  } catch (err) {
    if (err.code === "ENOENT") {
      return null;
    }

    throw new VError(err, `unable to read the ".gpmrc" in this directory`);
  }
};
