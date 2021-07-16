// 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - 
// crie uma função que deverá passar no teste abaixo.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const findAnimal = Animals.find(anim => anim.name === name);
    if (findAnimal) return resolve(findAnimal);
    return reject('Nenhum animal com esse nome!');
  });
}

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(anim => anim);
}

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais.
// O retorno deve ser um array de objetos, mas, caso não ache nenhum,
// retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const findAgedAnimal = Animals.find(anim => anim.age === age);
    if (findAgedAnimal) return resolve(findAgedAnimal);
    return reject('Nenhum animal com essa idade!');
  });
}

const getAnimalAge = (age) => {
  // Adicione o código aqui.
  return findAnimalByAge(age).then(anim => anim);
}

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});