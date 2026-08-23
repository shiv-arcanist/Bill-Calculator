import { computeTotalCents } from "./bill.mjs";

const [subtotal, tax = "0.13", tip = "0.15"] = process.argv.slice(2);
const totalCents = computeTotalCents({
  subtotalCents: Number(subtotal),
  taxRate: Number(tax),
  tipRate: Number(tip),
});
console.log(`total: $${(totalCents / 100).toFixed(2)}`);
