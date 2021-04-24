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
import { move } from "fs-extra";
import path from "path";
import VError from "verror";

import { gcloudDir, gpmDir } from "./";

import { getProjectName } from "./getProjectName";

const isSymbolicLink = async (dir: string) => {
  const stat = await fs.lstat(dir);

  return stat.isSymbolicLink();
};

export const add = async () => {
  const source = gcloudDir;

  if (await isSymbolicLink(source)) {
    throw new VError(
      `There is currently an activated project managed by "gpm". If your intention is to add a new project, perform a "gpm unmount" first, then create your new gcloud configuration via "gcloud init" and then execute this command again.`
    );
  }

  await fs.mkdir(gpmDir, { recursive: true });

  const projectName = await getProjectName();

  const destination = path.join(gpmDir, projectName);

  await move(gcloudDir, destination);

  await fs.symlink(destination, source, "dir");
};
