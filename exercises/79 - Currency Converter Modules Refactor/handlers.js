import { convert, formatCurrency } from "./lib.js";
import { fromInput, fromSelect, toSelect, toAmount } from "./money.js";

export async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}
