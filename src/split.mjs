// Split a bill total evenly across n payers. All money values are integer cents.
// Shares are rounded to whole dollars so nobody has to deal with coins.
export function splitBillCents(totalCents, payerCount) {
  if (!Number.isInteger(totalCents) || totalCents < 0) throw new Error("totalCents must be a non-negative integer");
  if (!Number.isInteger(payerCount) || payerCount < 1) throw new Error("payerCount must be a positive integer");
  const shareCents = Math.floor(totalCents / payerCount / 100) * 100;
  return Array.from({ length: payerCount }, () => shareCents);
}
