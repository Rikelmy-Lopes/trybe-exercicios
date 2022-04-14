//Parte 1

console.log(document.getElementById('elementoOndeVoceEsta'))

document.getElementById('elementoOndeVoceEsta').parentElement.style.backgroundColor = 'red';

document.getElementById('primeiroFilhoDoFilho').innerText = 'OLa Mundo;'

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild.nextElementSibling.nextSibling); //nao consegui

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').lastChild.previousSibling.previousElementSibling);

// Parte 2

let h3 = document.createElement('h3');
let h5 = document.createElement('h5');
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

console.log(elementoOndeVoceEsta.appendChild(h3));

console.log(document.getElementById('elementoOndeVoceEsta').appendChild(h3));

console.log(document.getElementById('primeiroFilhoDoFilho').appendChild(h5));

console.log(document.getElementsByTagName('h3')[0].firstElementChild); // nao consegui

//Parte 3
var elemento = document.getElementById('paiDoPai');

for (let index = 0; index < 10; index += 1) {
    elemento.removeChild(elemento.firstChild);
  }