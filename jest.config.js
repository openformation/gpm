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

module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  collectCoverage: Boolean(process.env.CI),
};
