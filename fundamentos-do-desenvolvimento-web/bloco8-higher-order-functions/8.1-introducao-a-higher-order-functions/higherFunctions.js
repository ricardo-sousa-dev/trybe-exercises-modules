// // Atribuir funções à variáveis:
// const sum = (a, b) => a + b;

// // Passar funções como argumento para outras funções:
// const sayHello = () => {
//   console.log('hello trybers');
// }
// setTimeout(sayHello, 1000);

// // Retornar uma função de outra função:
// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }


// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });


// Ao chamar a função doingThings:
// const acorda = () => 'Acordando!'
// const coffe = () => 'Bora tomar café!'
// const sleep = () => 'Partiu dormir!'

// const doingThings = (callback) => {
//   const result = callback();
//   console.log(result);
// };

// doingThings(acorda);
// doingThings(coffe);
// doingThings(sleep);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!




// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
// Solução:

// const employeeGenerator = (fullName) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return { fullName, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// console.log(newEmployees(employeeGenerator));



// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
//REF.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const aposta = 3;

function getRandomInt(aposta, checkWinner) {
  let min = Math.ceil(1);
  let max = Math.floor(5);
  let sorteio = Math.floor(Math.random() * (max - min)) + min;
  checkWinner(aposta, sorteio)
}

let checkWinner = (aposta, sorteio) => { 
  if ( aposta === sorteio  ) {
    return 'Parabéns você ganhou'
}
return 'Tente novamente'
}

console.log ('Número sorteado:', getRandomInt(aposta))
// console.log ('Número sorteado:', getRandomInt(sorteio))





