/* Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
imprima a mensagem: “valor maior que 20”.
Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i=0; i<numbers.length; i++) {
    soma += numbers[i];
}

let result = soma/numbers.length;

let mensagem = (result > 20) ? (console.log("valor maior que 20")) : (console.log("valor menor ou igual a 20"));
;

/* Baby steps
Todos os passos anteriores, pode copiar/colar
o "caso" indica que vai precisar de um if sobre se o resultado é maior ou nao que 20.
Dava para fazer mais eficiente neste if simples e sem if else, entao foi um ternario. */