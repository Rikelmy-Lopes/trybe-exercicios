const {sum, myRemove, myFizzBuzz, decode, encode, techList, hydrate, findUser } = require('./sum');


// Parte 1

describe('Retorna a soma de sum(a, b)', () => {
    it('retorna 9 quando sum(4,5)', () => {
        expect(sum(4,5)).toBe(9);
    })
    it('retorna 0 quando sum(0,0)', () => {
        expect(sum(0,0)).toBe(0);
    })
    it('retorna um erro caso seja string', () => {
        expect(() => {
            sum(4,'5')
        }).toThrow();
    })
    it('retorna um erro caso seja string', () => {
        expect(() => {
            sum(4,'5')
        }).toThrow('parameters must be numbers');
    })
})


// Parte 2

describe('Retorna um array sem um numero myRemove(arr, item)', () => {
    it('remove numero 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('verifica se nao retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('nao altera o array caso seja 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})




// Parte 3


describe('verifica se um numero é divisivel', () => {
    it('Se o numero e divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it('Se o numero e divisivel por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    it('Se o numero e divisivel por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    it('Se o numero nao e divisivel por 3 e 5', () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    it('Se o parametro nao é um numero', () => {
        expect(myFizzBuzz('ola')).toBe(false)
    })

})





// Parte 4


describe('Teste das funcoes do bloco 4', () => {
    it('verifica se encode é uma funcao', () => {
        expect(typeof encode).toBe('function')
    })
    it('verifica se decode é uma funcao', () => {
        expect(typeof decode).toBe('function')
    })
    it('verificar se as letras sao convertidas em numeros', () => {
        expect(encode('Rikelmy')).toBe('R3k2lmy')
    })
    it('verificar se os numeros sao convertidas em letras', () => {
        expect(decode('R3k2lmy')).toBe('Rikelmy')
    })
    it('verificar se as demais letras/numeros não sao convertidas', () => {
        expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz')
    })
    it('verificar se tem o mesmo numero de caracteres', () => {
        expect(encode('Rikelmy')).toHaveLength(7)
    })
    it('verificar se tem o mesmo numero de caracteres', () => {
        expect(encode('R3k2lmy')).toHaveLength(7)
    })
})


//Parte 5


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


//Parte 6

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});



//Bonus

describe('Testa a função findUser', () => {
  it('Testa se a função findUser é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se findUser é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
})
