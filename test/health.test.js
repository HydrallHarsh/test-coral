const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("health", () => {
  it("placeholder passes in CI", () => {
    assert.equal(1 + 1, 2);
  });
});
