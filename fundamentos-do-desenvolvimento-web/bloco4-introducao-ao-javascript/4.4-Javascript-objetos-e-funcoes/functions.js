// // Adição
// function sum (a,b){
// return a+b;
// }
// console.log("resultado soma: " + sum(2,3));

// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let palavra = "arara";
// console.log(verificaPalindrome(palavra));



// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let myArray = [30, 13, 26, 37, 410, 551];

// function indiceMaiorValorArray (array){
// maiorValor = 0;  
// maiorIndice = 0;
//   for (const key in array) {
//     if (array[key] > maiorValor) {
//       maiorValor = array[key];
//     }
//   }
//   maiorIndice = array.indexOf(maiorValor);
//   return maiorIndice;
// }

// console.log(indiceMaiorValorArray(myArray));


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let myArray = [30, 113, 2600, 370, 410, 551];

// function indiceMenorValorArray (array){
// menorValor = array[0];  
// menorIndice = 0;
//   for (const key in array) {
//     if (array[key] < menorValor) {
//       menorValor = array[key];
//     }
//   }
//   menorIndice = array.indexOf(menorValor);
//   return menorIndice;
// }

// console.log(indiceMenorValorArray(myArray));


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorCaracteres (array){
//   let nomeMaior = array[0];

//   for (let key in array) {
//     if (nomeMaior.length < array[key].length) {
//       nomeMaior = array[key];
//     }
//   }
//   return nomeMaior;
// }
// console.log(maiorCaracteres(arrayNomes));



// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido(numeros) {
//   let num = {};

//   for (let index = 0; index < numeros.length; index += 1) {
//     let valor = numeros[index];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2



// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// let n = 5;

// function somaN(n1){
// let soma = [];
// let resultado = 0;

//   for (let index = 0; index < n1+1; index +=1){
//     soma.push(index);
//   }

//   for (let index2 = 0; index2 < soma.length; index2 +=1) {
//     resultado += soma[index2];
//   }

// return resultado;
// }

// console.log(somaN(n));

