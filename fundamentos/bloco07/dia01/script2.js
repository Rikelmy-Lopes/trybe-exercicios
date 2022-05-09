let p = document.getElementById('p');
let countClick = 0;


const increaseValor = (event) => {
 
 
 
    countClick += 1;

 p.innerText = countClick;



}




const button = document.getElementById('button');

button.addEventListener('click', increaseValor);