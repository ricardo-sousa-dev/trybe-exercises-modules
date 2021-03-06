// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]);


// -----------



// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);




// -----------


// const myExpenses = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const myIncome = 1000;

// const monthlyBudget = (myIncome, myExpenses, callback) => {
//   const totalExpenses = callback(myExpenses);
//   const totalAfterExpenses = myIncome - totalExpenses;

//   console.log(`Balanço do mês:
//     Recebido: R$${myIncome},00
//     Gasto: R$${totalExpenses},00
//     Saldo: R$${totalAfterExpenses},00 `);
// };

// const handleExpenses = myExpenses => {
//   const eachValue = myExpenses.map((item => Object.values(item)));
//   const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
//   return totalExpense;
// };

// monthlyBudget(myIncome, myExpenses, handleExpenses);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00


// ---------


// const assert = require('assert');

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = callback => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser



// --------

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = () => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     console.log(user);
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// --------

// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, onError) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//       onError(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);