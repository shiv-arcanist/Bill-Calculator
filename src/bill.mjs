// Bill math. All money values are integer cents.
export function computeTotalCents({ subtotalCents, taxRate, tipRate }) {
  if (!Number.isInteger(subtotalCents) || subtotalCents < 0) throw new Error("subtotalCents must be a non-negative integer");
  const taxCents = Math.floor(subtotalCents * taxRate);
  const tipCents = Math.floor(subtotalCents * tipRate);
  return subtotalCents + taxCents + tipCents;
}
