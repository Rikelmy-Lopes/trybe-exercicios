// Cor de fundo da tela

let botaoBackground = document.getElementById('botao');
    botaoBackground.addEventListener('click', mudarCor);


    function mudarCor() {

   const cor = localStorage.setItem('cor', 'red');

    const novaCor = JSON.parse(localStorage.getItem('cor'))
    const body = document.querySelector('body');
    body.style.backgroundColor = novaCor;


    }


