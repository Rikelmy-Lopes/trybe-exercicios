// Parte 1


const newPerson = (nome) => {
    let nomeEmail = ``;
    let nomeEmail2 = ``; 
    nomeEmail = nome.toLowerCase()
    nomeEmail2 = nomeEmail.replace(/,?\s+/g, "_")
    
    let objeto = {
        nomeCompleto: nome,
        email: `${nomeEmail2}@trybe.com`
    }

    return objeto;
}


const newEmployees = (callback) => {
    
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employees;
  };

//   console.log(newEmployees(newPerson));


 //  Parte 2


const numeroApostado = (numero) => {
    return numero;
}

const sortearNumero = (callback) => {
    let numero = Math.floor(Math.random() * 5);

   if(numero === callback()) {
       return 'Parabens voce ganhou'
   } else {
       return 'Tente novamente'
   }

}

// console.log(sortearNumero(numeroApostado)); 

//Parte 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyArray = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
      return 1;
  } if (studentAnswers === "N.A") {
      return 0;
  } 
  return -0.5;
}

const returnResult = (rightAnswers, studentAnswers, callback) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
    contador += callbackReturn;
  }
  return `Resultado final: ${contador} pontos`;
}

// console.log(returnResult(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyArray))


//Bonus Parte 1

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  
  // 1

  const damagedragon = () => {
  let damage = Math.floor(Math.random() * (50 - 15 + 1) + 15);

  return damage;
  }


  // 2

  const damageWarior = () => {
    let damage = Math.floor(Math.random() * (6 - 30 + 1) + 30)
    return damage;
  }

  // 3

  const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };

  console.log(mageAttack(mage));