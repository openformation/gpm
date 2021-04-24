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

import fs from "fs/promises";
import VError from "verror";

import { gcloudDir } from "./";

export const deactivate = async () => {
  const source = gcloudDir;

  try {
    await fs.unlink(source);
  } catch (err) {
    if (err.code === "ENOENT") {
      return;
    }

    throw new VError(err);
  }
};
