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

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// console.log(typeof techList);

module.exports = { encode, decode, techList };
