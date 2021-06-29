// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');
const { runInNewContext } = require('vm');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let newArray = []
names.map(nome => {newArray.push(nome)})
let string = newArray.join(' ').split('')
let letraA = 0
string.forEach((letra) => {
  if(letra==='A' || letra==='a'){
    letraA +=1
  }
})
return letraA
}
// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
