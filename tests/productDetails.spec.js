const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const returnObject = productDetails('Alcool', 'Mascara') //ajuda da Lais(lalá)
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toEqual('function') //Requesito 1
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Luva', 'Mascara'))).toBeTruthy()
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Luva', 'Mascara').length).toEqual(2)
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const firstObject = typeof returnObject[0];
    const segundObject = typeof returnObject[1];
    expect(firstObject && segundObject).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(returnObject[0]).not.toEqual(returnObject[1]);
    // Teste se os dois productIds terminam com 123.
    expect(returnObject[0].details.productId).toMatch(/.*[1][2][3]/)
    expect(returnObject[1].details.productId).toMatch(/.*[1][2][3]/)
  });
});
