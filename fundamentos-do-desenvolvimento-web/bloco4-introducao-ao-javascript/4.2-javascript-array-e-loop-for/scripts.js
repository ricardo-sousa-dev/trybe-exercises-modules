let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const valores of numbers) {
	console.log(valores);
}

let soma=0;
for (let index = 0; index < numbers.length; index +=1) {
	soma = soma + numbers[index];
}
console.log(soma);

let media = 0;
for (let index = 0; index < numbers.length; index +=1){
  media += numbers [index];
}
  media = media/numbers.length;
  console.log(media);

if(media>20){
console.log('valor maior que 20');
}else{
console.log('valor menor ou igual a 20')}

let maior = 0;

for (let index = 0; index < numbers.length; index += 1){
  if(numbers[index]>maior){
  maior = numbers[index]}
}
console.log("maior valor: " + maior);

let impar = 0;

for(let index = 0; index < numbers.length; index +=1){
  if(numbers[index]%2!=0){
  impar +=1;}
 }
  

if(impar>0){
  console.log(impar);
}else{console.log("nenhum valor ímpar encontrado")}


let menor = maior;

for (let index = 0; index < numbers.length; index += 1){
  if(numbers[index]<menor){
  menor = numbers[index]}
}
console.log("menor valor: " + menor);


let arrayok = [];

for(let index = 1; index < 26; index +=1){
  arrayok.push(index);
}
console.log(arrayok);

for(index=0; index<arrayok.length; index +=1){
  console.log(arrayok[index]/2);
}

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[secondIndex] < numbers[index] ) {
      let position = numbers[secondIndex];
      numbers[secondIndex] = numbers[index];
      numbers[index] = position;
    }
  }
}
console.log(numbers);

let novo = [];
for(let index = 0; index < numbers.length; index +=1){
  if(index+1 < numbers.length){
    novo.push(numbers[index]*numbers[index+1]);
    }else{novo.push(numbers[index]*2)}
}
console.log(novo);