// const pedido = {
//   name: "Rafael Andrade",
//   phoneNumber: "11-98763-1416",
//   address: {
//     street: "Rua das Flores",
//     number: "389",
//     apartment: "701",
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: "Coca-Cola Zero",
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: "Ana Silveira",
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (param) => {
//   const deliveryPerson = param.order.delivery.deliveryPerson;
//   const customerName = param["name"];
//   const customerPhone = param["phoneNumber"];
//   const street = param.address.street;
//   const number = param.address.number;
//   const apartment = param.address.apartment;

//   console.log(
//     `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
//   );
// };

// customerInfo(pedido);

// const orderModifier = (param) => {
//   const newPedido = {
//     name: "Luiz Silva",
//     phoneNumber: "11-98763-1416",
//     address: {
//       street: "Rua das Flores",
//       number: "389",
//       apartment: "701",
//     },
//     order: {
//       pizza: {
//         Muzzarela: {
//           amount: 1,
//           price: 15,
//         },
//         Calabresa: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: "Coca-Cola Zero",
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: "Ana Silveira",
//         price: 5,
//       },
//     },
//     payment: {
//       total: 50,
//     },
//   };
//   Object.assign(param, newPedido);

//   const newBuyer = param.name;
//   const newOrder = Object.keys(param.order.pizza);
//   const drinks = param.order.drinks.coke.type;
//   const cost = param.payment.total;
//   const apartment = param.address.apartment;

//   console.log(
//     `Olá, ${newBuyer}, o total do seu pedido "${newOrder}", e ${drinks} é R$ ${cost}`
//   );
// };

// orderModifier(pedido);


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// adiciona um valor ao objeto
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
addNewKey(lesson2, 'turno', 'manhã');

//mostra as keys do objeto em um array
// const printKeys = (obj) => Object.keys(obj);
// console.log(printKeys(lesson2))

//mostra o tamanho do objeto
// const sizeObj = (obj) => Object.keys(obj).length;
// console.log(sizeObj(lesson2));

//mostra os valores do objeto
// const valuesObj = (obj) => Object.values(obj);
// console.log(valuesObj(lesson2));

// cria um objeto com outros dois objetos
// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons)

//mostra o número total de estudantes do exemplo anterior
// const totalStudents = (obj) => {
// let total = 0;
// const array = Object.keys(obj);

// for (let index = 0; index < array.length; index += 1) {
//   total += obj[array[index]].numeroEstudantes;
// }
// return total
// }
// console.log(totalStudents(allLessons));

//verifica se o objeto possui a chave e o valor passados
// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let index in arr) {
//     if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));