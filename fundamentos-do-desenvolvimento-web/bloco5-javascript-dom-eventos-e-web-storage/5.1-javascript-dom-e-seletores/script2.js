function changeText(){
let textP = document.getElementsByTagName('p')[1];
textP.innerText = 'Daqui 2 anos verei que este exercício é muito fácil!';
}
changeText();

function changeSquareToGreen(){
let colorMainContent = document.getElementsByClassName('main-content')[0];
colorMainContent.style.backgroundColor = 'green';
}
changeSquareToGreen();

function changeSquareToWhite(){
let colorCenterContent = document.getElementsByClassName('center-content')[0];
colorCenterContent.style.backgroundColor = 'white';
}
changeSquareToWhite();

function corrigeTexto() {
let textoH1 = document.getElementsByTagName('h1')[0];
textoH1.innerText = 'Exercício 5.1 - JavaEscripit';
}
corrigeTexto();

function maiusculo() {
let textUpper = document.getElementsByTagName('p')[0];
textUpper.style.textTransform = 'uppercase';
}
maiusculo();

function consoleP() {
let tagPconsole = document.getElementsByTagName('p');
  for (let index = 0; index < tagPconsole.length; index += 1) {
    console.log(tagPconsole[index].innerHTML);
  }
}
consoleP();