import test from "node:test";
import assert from "node:assert/strict";
import { computeTotalCents } from "../src/bill.mjs";

test("total applies tax and tip on the subtotal", () => {
  assert.equal(computeTotalCents({ subtotalCents: 10000, taxRate: 0.13, tipRate: 0.15 }), 12800);
});

test("zero subtotal is zero", () => {
  assert.equal(computeTotalCents({ subtotalCents: 0, taxRate: 0.13, tipRate: 0.15 }), 0);
});
