
//Parte 1

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }


  //Parte 2

  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  

// Parte 3


  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  

//Parte 4

function encode(string) {
    // seu código aqui
    var string1 = string;
    for(let i = 0; i < string1.length; i +=1){
      if(string1[i] === 'a') {
  string1 =  string1.replace('a', '1');
      }else if(string1[i] === 'e') {
       string1 = string1.replace('e', '2');
      }else if(string1[i] === 'i') {
        string1 = string1.replace('i', '3');
      }else if(string1[i] === 'o') {
       string1 = string1.replace('o', '4');
      }else if(string1[i] === 'u') {
       string1 =  string1.replace('u', '5');
      }
    } return string1;
  }








function decode(string1) {
    // seu código aqui
    var string2 = string1;
    for(let i = 0; i < string2.length; i +=1){
      if(string2[i] === '1') {
  string2 =  string2.replace('1', 'a');
      }else if(string2[i] === '2') {
       string2 = string2.replace('2', 'e');
      }else if(string2[i] === '3') {
        string2 = string2.replace('3', 'i');
      }else if(string2[i] === '4') {
       string2 = string2.replace('4', 'o');
      }else if(string2[i] === '5') {
       string2 =  string2.replace('5', 'u');
      }
    } return string2;
  }




//Parte 5

const arrayTech = ['HTML', 'CSS', 'JavaScript', 'Jest', 'React']

const techList = (arrayTechnologies, name) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';
  
    const sortedArray = arrayTechnologies.sort();
    const technologyList = [];
  
    for (let index = 0; index < sortedArray.length; index += 1) {
      technologyList.push({
        tech: sortedArray[index],
        name,
      });
    }
  
    return technologyList;
  };


  // Parte 6

  function hydrate(string) {
    let quantidade = string.replace(/[^\d]+/g,'')
    let array = []
    let soma = 0;
    let resultado = ``;

    for(let i = 0; i < quantidade.length; i += 1) {
        array.push(quantidade[i]);
    }
    for(let i = 0; i < array.length; i += 1) {
        soma += parseInt(array[i])
    }

     if (soma === 1) {
     resultado = `${soma} copo de água`;
     }else{
      resultado = `${soma} copos de água`;
     }

    return resultado;
       
    }

//Bonus
  // Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];




  function findUser(id, detail) {
    const array = Object.keys(professionalBoard);
    let vezes = 0;

    for (index in array) {
      if (professionalBoard[array[index]].id === 4678-2) {
        vezes += 1;
      }
    }

  return vezes;

  }


console.log(findUser())




  module.exports = {sum, myRemove, myFizzBuzz, decode, encode, techList, hydrate, findUser};