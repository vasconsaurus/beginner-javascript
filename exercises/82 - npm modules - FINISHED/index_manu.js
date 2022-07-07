import wait from 'waait';
import { faker } from '@faker-js/faker';
import { formatDistance } from 'date-fns';
import { format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js'

// waait
async function go() {
  console.log('going!');
  await wait(200);
  console.log('ending');
}

go();

// faker-js
const randomName = faker.name.firstName();
console.log(randomName)
console.log(faker)

const fakeNames = []
Array.from({ length: 10 }).forEach(() => {
  fakeNames.push(faker.name.firstName());
});

console.log(fakeNames)

// date-fns
const diff = formatDistance(
  new Date(2022, 1, 2),
  new Date(),
  { addSuffix: true }
)

console.log(diff)

const date = new Date();
const formatted = format(date, `LLLL 'the' do y`)
console.log(formatted)

// axios
async function getJokes() {
  const { data } = await axios.get('https://icanhazdadjoke.com',
  {
    headers: {
      Accept: 'application/json'
    }
  });
  console.log(data.joke);
}

getJokes();

// lodash
const a = [1,2,3,4,5,6,7,8,9,10];
const b = [5,3,8,3,4,565,34];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: 'manu' }
const person2 = { name: 'manu' }

console.log('Object is equal?', person1 === person2)
console.log('Object content is equal?', isEqual(person1, person2))


// await-to-js
function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if(firstName === 'manu'){
      resolve('cool name');
      return
    }
    reject(new Error('bad name'));
  })
}

async function checkName(firstName) {
  const [err, successValue] = await to(checkIfNameIsCool(firstName));
  if(err){
    // deal with it
    console.log(err)
  } else {
    console.log(firstName + '! '+ successValue)
  }
}

checkName('manu');
checkName(':P');
