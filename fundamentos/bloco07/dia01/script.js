//  const testingScope = escopo => {
//     if (escopo === true) {
//       var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
//     console.log(`${ifScope}  o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true); 




//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   // Seu código aqui.

//   const increaseOrder = (oddsAndEvens) => {
//       let number = 9999;
//       let arrayNumber = [];

//   for (let i = 0; i <= oddsAndEvens.length; i += 1) {
//    oddsAndEvens[i] < number ? number = oddsAndEvens[i] : console.log('menor');

//   }
  
//    arrayNumber.push(number)


//   return arrayNumber
//   }




//   console.log(`Os numeros ${increaseOrder(oddsAndEvens)} se encontram ordenados de forma crescente!`);


//   const fatorial = (number) => {
//   let multiplicado = number;
  
//    for(let index = 1; index < number; index += 1) {

//     multiplicado *= index;

//    }

//    return multiplicado;

//   }

//    console.log(fatorial(5));
 let arraySkills = [`Javascript`, `Html`, `Empatia`, `Css`, `Dom`];


   function init() {



    const replaceX = (string) => {
      let trybe = `Tryber x aqui!`;
   
      let trybe2 = trybe.replace(`x`, string);
     
     }
   
   const array = (trybe2) => {
   
     arraySkills.push(trybe2);
     
    }
    return array(trybe2);



    
   }


console.log(init())


