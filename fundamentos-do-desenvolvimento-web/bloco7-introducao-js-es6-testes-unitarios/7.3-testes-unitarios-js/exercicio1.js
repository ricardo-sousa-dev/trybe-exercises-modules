const assert = require('assert');

// A função sum(a, b) retorna a soma do parâmetro a com o b
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// const expected = sum(0, 0);

// assert.strictEqual(typeof sum, 'function');
// assert.strictEqual(expected, 9, 'A soma de 4 + 5 é igual a 9'); // OK
// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(expected, 0, 'A soma de 0 + 0 é igual a 0'); // OK
// assert.strictEqual(sum(0, 0), 0);
// assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/); // OK



// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
// console.log(newArr)
  return newArr;
}
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4])

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Verifique se o array passado por parâmetro não sofreu alterações
const myList = [5, 6, 7, 8];
myRemove(myList, 5);
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);



// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4])

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 2), [1,2,4])

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// myRemoveWithoutCopy(myList, 1);



// assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
// assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
// assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)
// assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');
// assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');
