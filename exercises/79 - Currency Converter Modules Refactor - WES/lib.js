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

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
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
