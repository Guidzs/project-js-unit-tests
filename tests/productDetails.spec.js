const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(2);
    expect(typeof result[0] && typeof result[1]).toBe('object');
    expect(result[0] === result[1]).toBeFalsy();
    expect(result[0].details.productId.endsWith('123')).toBeTruthy();
    expect(result[1].details.productId.endsWith('123')).toBeTruthy();
  });
});
