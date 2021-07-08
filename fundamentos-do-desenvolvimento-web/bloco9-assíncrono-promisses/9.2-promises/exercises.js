// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()* 11);

//   if (number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// ----------

// const fetch = require('node-fetch');

// Vamos dar uma olhada rápida no código. Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint. Depois retornamos uma promise , transformando nossa função em uma função assíncrona. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json() , e para finalizar usamos o resolve para retornar a nossa resposta. Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora.
// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }


// -----------

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");


// ----------------

const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => (r.value));
//   }
//   throw new Error('endpoint não existe');
// }

// async function sendJokeToFriend(name) {
//   const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");


// -------------

// const getPokemonPromise = (pokemonName) => {
//   return new Promise((resolve, reject) => {
//     if (pokemonName === 'squirtle') {
//       reject('Esse pokemon não é aceito nesse game!'); // deu ruim!
//     } else {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)  // retorna uma promise
//         .then((response) => {
//           response.json().then((jsonDoPokemon) => {
//             appendPokemon(jsonDoPokemon);
//             resolve(); // deu bom! concluído com sucesso!
//           })
//         });
//     }
//   });
// };

// const fetchPokemonPromise = async () => {
//   try {
//     await getPokemonPromise('pikachu');
//     await getPokemonPromise('rattata');
//     await getPokemonPromise('squirtle');
//     await getPokemonPromise('kakuna');
//   } catch (error) {
//     console.log(error);
//   }
// }

// window.onload = fetchPokemonPromise();

// -----------------------

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   fetch(API_URL, { headers: { Accept: 'application/json' } })
//     .then(response => response.json())
//     .then(data =>
//       document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// onload = () => fetchJoke();


// ------------------


const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();