import currencies from "./currencies.js";
import { handleInput } from "./handlers.js";

export const fromInput = document.querySelector('[name="from_amount"]');
export const fromSelect = document.querySelector('[name="from_currency"]');
export const toSelect = document.querySelector('[name="to_currency"]');
const form = document.querySelector('.app form');
export const toAmount = document.querySelector('.to_amount')
export const ratesByBase = {};

function generateOptions(options) {
  return Object.entries(options).map(([currencyCode, currencyName]) =>
    `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  ).join('');
}

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML

form.addEventListener('input', handleInput);
