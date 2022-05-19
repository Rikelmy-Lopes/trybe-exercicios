
//Spread Operator

const specialFruit = ['Mangaba', 'Uva', 'Melancia'];

const additionalItens = ['leite condensado', 'chocolate', 'leite em po'];

const fruitSalad = (fruit, additional) => {
  const salada  = [...specialFruit, ...additionalItens];
  return salada;
};

// console.log(fruitSalad(specialFruit, additionalItens));

//Object Destructuring


const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name1, b: classAssigned, c: subject } = student;
  
//   console.log(name1); // Maria
//   console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática


// 1

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const pessoa = {
      ...user,
      ...jobInfos,
  }

//   console.log(pessoa);


// 2

const {name, age, nationality2, profession, squad, squadInitials } = pessoa;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality2}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)


// Array Destructuring

// 1

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [parametro, funcao] = saudacoes;

// funcao(parametro);


// 2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
// console.log(comida, animal, bebida); // arroz gato água


// 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


// Default Destructuring

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality = 'Brazilian'}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));



// Object Property Shorthand

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// 1

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

// console.log(getPosition(-19.8157, -43.9542));

// Default Parameters

const multiply = (number , value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));