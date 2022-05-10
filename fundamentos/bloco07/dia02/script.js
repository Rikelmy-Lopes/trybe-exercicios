// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//  let string = ``;

//  string = `Ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N ${order.address.number}, AP: ${order.address.apartment}`
 
//  return string;
// }

// console.log(customerInfo(order));

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   let string = ``;
//   order.name = 'Luiz Silva';
//   order.payment.total = 50;

//   string = `Ola ${order.name}, o total do seu pedido de marguerita e Coca-Cola Zero é R$ ${order.payment.total},00`

//   return string;

// }

// orderModifier(order);

// console.log(orderModifier(order));



// Part 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

 

//1

 function addNight(lesson2,key1, propriedade1) {

  lesson2[key1] = propriedade1;

  return lesson2

 }

 console.log(addNight(lesson2, 'turno', 'noite'));


// 2

function listKeys (lesson1) {
  
return Object.keys(lesson1);
}

console.log(listKeys(lesson1));

// 3


function showSize (lesson1) {
let quantidade = 0;
//   for(let index in lesson1) {
// quantidade += 1;

//   }

  quantidade = Object.keys(lesson1).length;

  return quantidade;
}

console.log(showSize(lesson1));


// 4

function listValue (lesson3) {

  return Object.values(lesson3);

}

console.log(listValue(lesson3))

// 5

 let allLessons = [[]];

 allLessons =  Object.assign({},{lesson1, lesson2, lesson3})


console.log('Numero 5:', allLessons);


// 6

function allStudents (allLessons) {

    let total = 0;
    const array = Object.keys(allLessons);
    for (index in array) {
      total += allLessons[array[index]].numeroEstudantes;
    }
    return total;

}

console.log(allStudents(allLessons));

// bonus 1


const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));


// bonus 2

const createReport = (obj) => {
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática') {


    } 
  }
}