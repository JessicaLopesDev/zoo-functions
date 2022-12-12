const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('recebendo argumentos como parâmetro, retorna o esperado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
