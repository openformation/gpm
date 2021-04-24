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

import { gpmDir } from "./";

export const list = async () => {
  const exists = await fs.stat(gpmDir);

  if (!exists) {
    return [];
  }

  const projects = await fs.readdir(gpmDir);

  return projects;
};
