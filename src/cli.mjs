import { computeTotalCents } from "./bill.mjs";
import { splitBillCents } from "./split.mjs";

const args = process.argv.slice(2);
const splitIndex = args.indexOf("--split");
const payerCount = splitIndex === -1 ? 1 : Number(args[splitIndex + 1]);
const positional = splitIndex === -1 ? args : args.slice(0, splitIndex);

const [subtotal, tax = "0.13", tip = "0.15"] = positional;
const totalCents = computeTotalCents({
  subtotalCents: Number(subtotal),
  taxRate: Number(tax),
  tipRate: Number(tip),
});
console.log(`total: $${(totalCents / 100).toFixed(2)}`);

if (payerCount > 1) {
  const shares = splitBillCents(totalCents, payerCount);
  shares.forEach((share, i) => console.log(`payer ${i + 1}: $${(share / 100).toFixed(2)}`));
}
