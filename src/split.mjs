// Split a bill total evenly across n payers. All money values are integer cents.
// Uses largest-remainder distribution so shares always sum to the exact total.
export function splitBillCents(totalCents, payerCount) {
  if (!Number.isInteger(totalCents) || totalCents < 0) throw new Error("totalCents must be a non-negative integer");
  if (!Number.isInteger(payerCount) || payerCount < 1) throw new Error("payerCount must be a positive integer");
  const base = Math.floor(totalCents / payerCount);
  const remainder = totalCents - base * payerCount;
  return Array.from({ length: payerCount }, (_, i) => base + (i < remainder ? 1 : 0));
}
