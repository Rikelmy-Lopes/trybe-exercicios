// atividade 1 //
const num1 = 558;
const num2 = 35;
const num3 = 15;

console.log('soma', num1 + num2);
console.log('Subtracao', num2 - num1 );
console.log('multiplicaco', num1 *num2);
console.log('divisao', num2 / num1);
console.log('modulo', num2 % num1);

// atividade 2//

if(num1 < num2) {
    console.log('O maior numero é:', num2)
} else {
    console.log('O maior numero é:', num1)
}

//atividade 3//

if (num2 && num3 < num1){
    console.log('O maior numero é:', num1)
}else if(num1 && num3 < num2){
    console.log('O maior numero é:', num2)
} else if(num1 && num2 < num3) {
    console.log('O maior numero é:', num3) 
}

//atividade 4//

const num4 = -10;
if(num4 <= 0) {
    console.log('negativo')
} else{
    console.log('positivo')
}

//atividade 5//
const angulo1 = 60;
const angulo2 = 45;
const angulo3 = 90;

const total = angulo1 + angulo2 +angulo3;

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('houve um erro')
}else if(total === 180) {
        console.log('true')
} else if (total != 180) {
        console.log('false')
}

//atividade 6 //

let peca1 = 'BISPO';
peca1 = peca1.toLocaleLowerCase();

// atividade 7//
const nota = -5;


if (nota >= 0 && nota < 50) {
    console.log('F')
} else if(nota >= 50 && nota < 60) {
    console.log('E')
} else if(nota >= 60 && nota < 70) {
    console.log('D')
} else if(nota >= 70 && nota < 80) {
    console.log('C')
} else if(nota >= 80 && nota < 90 ) {
    console.log('B')
} else if(nota >= 90 && nota <= 100) {
    console.log('A')
} else if(nota < 0 || nota > 100) {
    console.log('houve um erro')
}

//atividade 8//

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0 ) {
 console.log(true)
} else{
    console.log(false)
}

//atividade 9//
if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 1 == 0 ) {
    console.log(true)
   } else{
       console.log(false)
   }

   //atividade 10//

   let custo = 6.5;
   let venda = 10;
   
   if(custo <= 0){
       console.log('Algo deu errado');
   } else { let imposto = (custo / 100) * 20;
   custo = custo + imposto;
   let lucro = venda - custo;
   let lucroDeMil = lucro * 1000;
   console.log('O lucro foi de:', lucroDeMil)
   }

   //atividade 11//

   let salario = 7000;

   if(salario <= 1556.94) {
       let imposto = salario / 100 * 8;
       salario = salario - imposto;
   } else if(salario >= 1556.95 && salario <= 2594.92) {
    let imposto = salario / 100 * 9;
    salario = salario - imposto;
   }else if(salario >= 2594.93 && salario <= 5189.82) {
    let imposto = salario / 100 * 11;
    salario = salario - imposto;
   }else if(salario > 5189.82) {
    salario = salario - 570.82;
   }

   
   if(salario <= 1903.98) {
       console.log('O seu salario é de :', salario)
   } else if(salario >= 1903.99 && salario <= 2826.65) {
       let imposto = salario / 100 * 7.5;
       imposto = imposto - 142.80;
       salario = salario - imposto;
   }else if(salario >= 2826.66 && salario <= 3751.05) {
    let imposto = salario / 100 * 15;
    imposto = imposto - 354.80;
    salario = salario - imposto;
}else if(salario >= 3751.06 && salario <= 4664.68) {
    let imposto = salario / 100 * 22.5;
    imposto = imposto - 636.13;
    salario = salario - imposto;
}else if(salario > 4664,68) {
    let imposto = salario / 100 * 27.5;
    imposto = imposto - 869.36;
    salario = salario - imposto;
}
console.log('O seu salario é de:', salario)