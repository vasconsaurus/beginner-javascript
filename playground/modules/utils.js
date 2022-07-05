// module scoped
const last = 'bos'

// named exports
export const title = 'señor'

const manu = 'manu'
const middle = 'vasconsaurus'
export { manu, middle }

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

// default export
const defaultExport = 'a default one'
export default defaultExport;
