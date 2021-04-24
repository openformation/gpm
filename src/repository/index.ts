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
import os from "os";

const configDir = path.join(os.homedir(), ".config");

export const gcloudDir = path.join(configDir, "gcloud");
export const gpmDir = path.join(configDir, "gpm");

export * from "./activate";
export * from "./add";
export * from "./deactivate";
export * from "./list";
export * from "./getProjectName";
export * from "./readRc";
