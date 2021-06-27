console.log("_____________");
console.log("DEFININDO O MAIOR ENTRE OS DOIS NÚMEROS:");

let a = 20;
let b = 8;

console.log(" ");
console.log("Número A:",a);
console.log("Número B:",b);

if(a>b){
console.log("O número A (",a,") é maior que B!");
}else{
console.log("O número B (",b,") é maior que A!");
}
console.log("_____________");
console.log("DEFININDO O MAIOR ENTRE OS TRÊS NÚMEROS:");

let c = 33;

console.log(" ");
console.log("Número A:",a);
console.log("Número B:",b);
console.log("Número C:",c);

if(a>b && a>c){
console.log("O número A (",a,") é maior que B e C!");
}
else if(b>a && b>c){
console.log("O número B (",b,") é maior que A e C!");
}else {
console.log("O número C (",c,") é maior que A e B!");
}
console.log("_____________");

console.log("TRUE E FALSE");

let valor = true;

if(valor){
console.log("positive")}
else{console.log("negative")}

console.log("_____________");

console.log("ANGULOS INTERNOS DE UM TRIANGULO");

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
console.log("_____________");

console.log("XADREZ - BISPO");
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
console.log("_____________");

console.log("GRADE DE 0 A 100");


let grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
console.log("_____________");

console.log("PELO MENOS UM NÚMERO PAR");

a = 1;
b = 3;
c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

console.log("_____________");

console.log("PELO MENOS UM NÚMERO IMPAR");

a = 1;
b = 3;
c = 5;

let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

console.log("_____________");

console.log("LUCRO DO PRODUTO");

let custo = 10;
let imposto = 0.2;
let unidade = 25;
let quant = 1000;
let lucro = (unidade*quant)-((unidade*0.2)*quant)-(custo*quant);

console.log("O lucro é "+lucro);

console.log("_____________");

console.log("SALÁRIO");


let aliquotINSS;
let aliquotIR;

let grossSalary = 3000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));