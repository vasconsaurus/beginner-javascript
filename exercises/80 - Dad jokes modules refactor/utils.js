export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)]
  if(item === not) {
    console.log('used it before')
    return randomItemFromArray(arr, not);
  }
  return item;
}
