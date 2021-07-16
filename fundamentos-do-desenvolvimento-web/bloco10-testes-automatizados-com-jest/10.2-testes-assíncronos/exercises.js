const arrayAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "x",
  "z",
];

const arrayNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

const encode = (num) => {
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === num) {
      return arrayAlpha[i];
    }
  }
};

const decode = (string) => {
  for (let i = 0; i < arrayAlpha.length; i += 1) {
    if (arrayAlpha[i] === string) {
      return i + 1;
    }
  }
};

function techList(arrayTech, people) {
  const newArray = [];

  if (arrayTech.length === 0) {
    return "Vazio!";
  } else {
    arrayTech.forEach((element) => {
      newArray.push({
        tech: element,
        name: people,
      });
    });
    const ordena = (a, b) => (a.tech < b.tech ? -1 : 1);
    return newArray.sort(ordena);
  }
}


const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};


const users = [
{ name: 'Mark' },
{ name: 'Paul' }
];

const findUserById = (param) => {
  return new Promise((resolve, reject) => {
      if (users.name === param) {
        return resolve(users.name);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};


// ANIMAIS
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

module.exports = { encode, decode, techList, uppercase, getUserName, users, findAnimalByAge, getAnimalByAge};
