// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palavra) {
    var letra = '';
    for(let index = palavra.length - 1; index <= palavra.length; index -= 1) {
        letra += palavra[index]
        if(index === 0) {
            if(palavra === letra) {
                return console.log(true);
            }else {
                return console.log(false);
            }
        }
    }

}

verificaPalindrome('arara')


//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

numbers = [2, 3, 6, 7, 10, 1];

function maiorValor(numbers) {
    let maior = 0; 

for(var index = 0; index < numbers.length; index+= 1) {
    if(numbers[index] > maior) {
        maior = numbers[index]
    }
    if(maior === numbers[index]) {
        var index2 = index;
    }
} return console.log(index2);
}

maiorValor(numbers)

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers2 = [2, 4, 6, 7, 10, 0, -3];

function menorValor(numbers2) {
    let menor = 999999999; 

    for(var index2 = 0; index2 < numbers2.length; index2+= 1) {
        if(numbers2[index2] < menor) {
            menor = numbers2[index2]
        } if(menor === numbers2[index2]) {
            var index3 = index2;
    }
    } 
    return console.log(index3);
} 

menorValor(numbers2)


//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {
let palavra = '';


for(let index = 0; index < array.length; index += 1) {
    let palavra2 = array[index];
    if(palavra2.length > palavra.length) {
        palavra = palavra2;
    }

} return console.log(palavra);
}

maiorNome(array)

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numeros = [2, 3, 2, 5, 8, 2, 3];

for(let i = 0; i < numeros.length; i += 1) {
let aparece = 0;
let repetiu = false;
}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let n = 5;

function somatorio(n) {
    let soma = 0;
    for(let index = 0; index <= n; index += 1) {
        soma += index
    } return console.log(soma);

}
somatorio(n)


//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

let palavra = 'trybe';
var fim = 'be';
let tamanho = fim.length;

function valorFinal(palavra, fim) {

    for(let i = 0; i < tamanho ; i += 1) {
        if(palavra[palavra.length - tamanho ] && palavra[palavra.length - tamanho + 1] === fim) {
            return console.log(true);
        }else {
            return console.log(false);
        }
    }
}


valorFinal(palavra, fim);




