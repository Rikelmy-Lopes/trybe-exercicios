// array.forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

//   emailListInData.forEach(showEmailList);



// array.find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    return numbers.find((number) => number % 3 === 0 && number % 5 === 0
  )
}


// console.log(findDivisibleBy3And5());


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
 return names.find((name) => name.length === 5)
}

// console.log(findNameWithFiveLetters());


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    // Adicione seu código aqui
   return musicas.find((index) => index.id === id)
  }
  
//   console.log(findMusic('31031685'))



// array.some

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nome) => nome === name)
}

// console.log(hasName(names2, 'José'))


// array.every

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((index) => index.age >= minimumAge)
  }
  
//   console.log(verifyAges(people, 18));



// array.sort

  const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people2.sort((a, b) => a.age - b.age);
  
//   console.log(people2);


  people2.sort((a, b) => b.age - a.age);
  
//   console.log(people2);