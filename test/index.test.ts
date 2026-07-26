import { describe, expect, it } from "vitest";

import { noop } from "../src/index.js";

describe("noop", () => {
  it("accepts zero or many values and returns undefined", () => {
    expect(noop()).toBeUndefined();
    expect(noop(1, "two", {})).toBeUndefined();
  });
});
