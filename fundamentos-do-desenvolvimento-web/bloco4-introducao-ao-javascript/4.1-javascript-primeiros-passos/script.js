let pizza = [];
pizza.push(2,4,6,8,10);
console.log(pizza);
pizza.push(12);
console.log(pizza);
pizza.unshift(14);
console.log(pizza);
pizza.pop();
console.log(pizza);
pizza.shift();
console.log(pizza);
let indicePizza = pizza.indexOf(8);
console.log(indicePizza);
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia']
for (let index = 0; index < groceryList.length; index += 1) {
console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(print of names){
console.log(print);}