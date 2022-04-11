// 1 -  fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.


let fatorial = 10;
var resultado = fatorial;
for(let index = 1; index < fatorial; index += 1) {
   resultado *= index;
} console.log('1 - Fatoracao: ',resultado);

// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let letra = '';


for(let index = 5; index <= word.length; index -= 1) {
    letra += word[index]
    if(index === 0) {
        console.log(letra);
    } else if(index < 0){
        break;
    }
}

//3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = '';


for(let index = 0; index < array.length; index += 1) {
    let palavra2 = array[index];
    if(palavra2.length > palavra.length) {
        palavra = palavra2;
    }

} console.log(palavra);


palavra3 = '                  '

for(let index = 0; index < array.length; index += 1) {
    let palavra2 = array[index];
    if(palavra2.length < palavra.length) {
        palavra = palavra2;
    }

} console.log(palavra);





// 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeroAtual = 0;
let primo = true;
let numeroPrimo = [];

for(let i =  50; i >= 2; i -= 1 ) {
    numeroAtual = i;
    for(let i2 = 2; i2 <= numeroAtual - 1; i2 += 1){
        if(numeroAtual % i2 == 0) {
            primo = false;
            break;
        }
    }
    if(primo === true) {
        numeroPrimo = i;
        break;
    }
    primo = true;
}
console.log(numeroPrimo);