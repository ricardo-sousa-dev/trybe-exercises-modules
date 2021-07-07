const joke = (jk) => {
  let div = document.querySelector('div');
  let p = document.createElement('p');

  div.appendChild(p);
};

const getJoke2 = async () => {
    let joke = await fetch('https://pokeapi.co/api/v2/ability/7/');
    // .then((response) => response.json())
    // .then((response) => response.pokemon[0])
    // .catch((err) => new Error(err));
    
    // joke = await joke.json();
    // joke = joke.pokemon[0];

    console.log(joke);
}




window.onload = getJoke2();