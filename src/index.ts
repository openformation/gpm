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

import yargs from "yargs";
import { register, activate, deactivate, info, use } from "./cli";
import { hasConfiguredGcloudProject } from "./middlewares";

const app = async () => {
  yargs(process.argv.slice(2))
    .command(
      "register",
      "Registers the currently configured gcloud project to be managed by `gpm`.",
      register
    )
    .command(
      "activate",
      "Selects and activates one of your gcloud projects.",
      activate
    )
    .command(
      "deactivate",
      "Deactivates the current active gcloud project (useful for performing `gcloud init` on a new project).",
      deactivate
    )
    .command(
      "info",
      "Displays information about the currently activated project.",
      info
    )
    .command(
      "use",
      "Reads a local `.gpmrc` and activates the configured project.",
      use
    )
    .middleware(hasConfiguredGcloudProject, true).argv;
};

app().catch((err) => {
  process.exitCode = 1;

  console.error(err);
});
