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

jest.mock("fs/promises", () => ({
  move: jest.fn(),
  async readFile() {
    return `
[core]
account = andre.koenig@openformation.io
project = my-project
`;
  },
}));

import { getProjectName } from "./getProjectName";

describe("The function for fetching the currently configured project name", () => {
  test("should return a proper name", async () => {
    const projectName = await getProjectName();

    expect(projectName).toBe("my-project");
  });
});
