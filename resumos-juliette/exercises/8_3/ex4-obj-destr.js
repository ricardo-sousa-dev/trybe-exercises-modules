// 4. Escreva uma função filterPeople que, dada uma lista de pessoas,
// retorna todas as pessoas australianas que nasceram no século 20:

const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

filterPeople = (people) => {
  const filteredPeople = people.filter(({bornIn, nationality}) => { //passar object destructuring como paramêtro para poder chamar os valores correspondentes dentro da function
    return (bornIn >= 1900 && bornIn < 2000) && nationality === 'Australian'; //condicionar e retornar o filter segundo critérios pedidos 
  });
  return filteredPeople;
}


const filteredPeople = filterPeople(people);

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
    
