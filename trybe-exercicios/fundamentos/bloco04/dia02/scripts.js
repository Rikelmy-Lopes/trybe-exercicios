let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// atividade 1//
console.log('1 - Todos os numeros são:');
for(let number of numbers) {
console.log(number);
}

// atividade 2//

let soma2 = 0;

for(let index = 0; index < numbers.length; index+= 1) {
    soma2 += numbers[index];
} console.log('2 - A soma de todos os numeros é: ',soma2)


//atividade 3// 
let media = 0;
let soma = 0;

for(let index = 0; index < numbers.length; index+= 1) {
    soma += numbers[index];
    let elementos = numbers.length
    media = soma / elementos;

} console.log('3 - A media dos numeros: ', media) 

// atividade 4//

if(media > 20) {
    console.log(' 4 - Valor maior que 20')
} else{
    console.log('4 - Valor menor ou igual que 20')
}

// atividade 5//
let maior = 0; 

for(let index = 0; index < numbers.length; index+= 1) {
    if(numbers[index] > maior) {
        maior = numbers[index]
    }
} console.log('5 - O maior valor é: ' + maior)


//atividade 6//
var impares = 0;
for(let index = 0; index < numbers.length; index+= 1) {
    if(numbers[index] % 2 === 1) {
impares++;
}
} if(impares === 0) {
    console.log('6 - Nenhum valor impar encontrado')
} else if(impares > 0) {
    console.log('6 - Quantidade de impares: ' + impares)
}

//atividade 7//

let menor = 999999999; 

for(let index = 0; index < numbers.length; index+= 1) {
    if(numbers[index] < menor) {
        menor = numbers[index]
    }
} console.log('7 - O menor valor é: ' + menor)

// atividade 8//

let array2 = [];
for(let index = 1; index < 26; index+= 1) {
array2.push(index)
} console.log('8 - Array de 1 a 25',array2);

// atividade 9//
let dividido = 0;
for(let index = 0; index < array2.length; index+= 1) {
dividido = array2[index] / 2;
console.log('9 - Resultado da divisao do numero', array2[index], ' por 2: ', dividido);
}


//bonus//

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers2.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers2[index] < numbers2[secondIndex]) {
        let position = numbers2[index];
        numbers2[index] = numbers2[secondIndex];
        numbers2[secondIndex] = position;
      }
    }
  }