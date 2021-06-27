// const n = 9;

// let resultado = 100;
// for(let i=0; i<=n; i+=1){
//   resultado -= i;
// }
// console.log(resultado);

// let n=6;

// for (let index = 0; index < n; index+=1) {
//   console.log("*  *  *  *  *  *");    
//   }



// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//     console.log(inputLine);
//   inputLine = inputLine + symbol;
// };


// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// };
   
  

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };



// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };


// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }



// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');


// FAZENDO SOZINHO:

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// let n = 5;
// let asterisco = "*";
// let branco = " "

// for (let index = 0; index <= n; index +=1) {
//     asterisco = asterisco + "*"; 
// }

// asterisco += asterisco;

// for(let index2 = 0; index2 <=n; index2 +=1) {
// console.log(asterisco);  
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// console.log("--------------------");

// let n = 5;
// let asterisco = "*";
// let branco = " "

// console.log(branco);
// console.log(asterisco); 

// for (let index = 1; index < n; index +=1) {
//     asterisco += "*"; 
//   console.log(asterisco);
// }


// 3- Agora inverta o lado do triângulo. Por exemplo:
console.log("--------------------");

let n = 5;
let linha = " ";

for (let index = 0; index <= n; index +=1) {
  for (let index2 = 0; index2 <= n; index2 +=1) {
    if (index2 < n) {
      linha += " ";
    }else{
      linha += "*";}

      console.log(linha);
}
}