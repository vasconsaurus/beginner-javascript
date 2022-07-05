export function generateOptions(options) {
  return Object.entries(options).map(([currencyCode, currencyName]) =>
    `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
  ).join('');
}

export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount)
}
