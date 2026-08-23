import test from "node:test";
import assert from "node:assert/strict";
import { splitBillCents } from "../src/split.mjs";

test("even dollar totals split cleanly", () => {
  assert.deepEqual(splitBillCents(20000, 2), [10000, 10000]);
});
