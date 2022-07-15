const services =  require('../services/services');
let { randomNumber, toUpperCase, firstLetter, joinWords, dogPictures } = services;

describe('Testa funcao randomNumber', () => {
    test('verifica se a funcao funciona', () => {
        randomNumber = jest.fn().mockReturnValue(10);
        randomNumber();
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber()).toBe(10)
        expect(randomNumber).toHaveBeenCalledTimes(2)

    })
    test('verifica se a funcao faz divisao', () => {
        randomNumber = jest.fn().mockImplementation((number1, number2) => number1 / number2);
        randomNumber();
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber(10, 2)).toBe(5);
        expect(randomNumber).toBeCalledTimes(2);
    })
    test('verifica se a funcao faz multiplicacao', () => {
        randomNumber = jest.fn().mockImplementation((number1, number2, number3) => number1 * number2 * number3);
        expect(randomNumber(3, 3, 3)).toBe(27)
        
        randomNumber.mockReset();
        randomNumber = jest.fn().mockImplementation((number1) => number1 * 2 )
        expect(randomNumber(5)).toBe(10)
    })
})

describe('Testa as funcoes de plavras e letras', () => {
    test('testa a funcao toUpperCase', () => {
        const toUpperCaseMock = jest.spyOn(services, 'toUpperCase').mockImplementation((string) => string.toLowerCase());
        expect(toUpperCaseMock('RIKELMY')).toBe('rikelmy');

        services.toUpperCase.mockRestore();
        expect(toUpperCase('rikelmy')).toBe('RIKELMY')
        
    })
    test('testa a funcao firstLetter', () => {
        const firstLetterMock = jest.spyOn(services,'firstLetter').mockImplementation((string) => string[string.length - 1]);
        expect(firstLetterMock('Rikelmy')).toBe('y');
        
        services.firstLetter.mockRestore();
        expect(firstLetter('rikelmy')).toBe('r')
        
    })
    test('testa a funcao joinWords', () => {
        const joinWordsMock = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3)
        expect(joinWordsMock('Rikelmy', 'Lopes', 'Silva')).toBe('RikelmyLopesSilva')
        
        joinWordsMock.mockRestore();
        expect(joinWords('Rikelmy', 'Lopes')).toBe('RikelmyLopes');

    })
})
describe('Testa funcao dogPictures', () => {
    dogPictures = jest.fn();
    afterEach(dogPictures.mockReset)

    test('Testando se a requisicao foi bem sucedida', async () => {
    dogPictures.mockResolvedValue('request success');
    dogPictures()
    expect(dogPictures).toHaveBeenCalled();
    await expect(dogPictures()).resolves.toBe('request success')
    expect(dogPictures).toHaveBeenCalledTimes(2)
});
    test('testa se a requsicao falha', async () => {
        dogPictures.mockRejectedValue('request failed')
        expect(dogPictures).toHaveBeenCalledTimes(0)
        await expect(dogPictures()).rejects.toMatch('request failed')
        expect(dogPictures).toHaveBeenCalledTimes(1)
    });
});