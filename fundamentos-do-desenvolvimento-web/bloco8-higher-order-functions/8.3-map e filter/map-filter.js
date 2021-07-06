// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];
// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];
// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
//   { [product]: listPrices[index] }
// ));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);


const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// const novaLista = books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
// console.log(novaLista)


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// const newArray = books.map((livro) => ({age: livro.age, author: livro.author.name})).sort((obj1, obj2) => obj1.age - obj2.age);
// console.log(newArray)


// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// const ficcao = books.filter((livro) => (livro.genre === 'Ficção Científica') || (livro.genre === 'Fantasia'))
// console.log(ficcao);


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// const maisVelho = books.filter((livro) => (livro.releaseYear < 1961)).sort((a,b)=>b.releaseYear-a.releaseYear)
// console.log(maisVelho)


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// const autores = books.map((livro) => livro.author.name).sort()
// console.log(autores)


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// const livroMaior60 = books.filter((livro)=> livro.releaseYear < 1961).map((livro)=>livro.name)
// console.log(livroMaior60);


// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// const autor3Iniciais = books.find((book) => (
//     book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
//   )).name;
// console.log(autor3Iniciais);
