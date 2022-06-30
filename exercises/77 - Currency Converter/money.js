const fromInput = document.querySelector('[name="from_amount"]');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const form = document.querySelector('.app form');
const toAmount = document.querySelector('.to_amount')
const ratesByBase = {};

const endpoint = 'https://api.apilayer.com/exchangerates_data/latest'
const key = config.KEY;

const myHeaders = new Headers();
myHeaders.append("apikey", key);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders
};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  return Object.entries(options).map(([currencyCode, currencyName]) =>
    `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  ).join('');
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  if(!ratesByBase[from]) {
    console.log(`oh noe ${from} ${to}, going to get them`);
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
  }
  // convert amount
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} - ${convertedAmount} ${to}`);
  return convertedAmount
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount)
}

async function handleInput(e) {
  const rawAmount = await convert(fromInput.value, fromSelect.value, toSelect.value);
  toAmount.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);
fromSelect.innerHTML = optionsHTML
toSelect.innerHTML = optionsHTML

form.addEventListener('input', handleInput);
