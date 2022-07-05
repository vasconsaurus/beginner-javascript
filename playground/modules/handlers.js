// export async function handleButtonClick(event) {
//   const currenciesModule = await import('./currencies.js');
//   console.log(currenciesModule.default)
// }

export async function handleButtonClick(event) {
  const { localCurrency, default:currency } = await import('./currencies.js');
  console.log(localCurrency, currency)
}
