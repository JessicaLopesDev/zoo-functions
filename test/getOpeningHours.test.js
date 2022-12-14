const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('recebendo argumentos como parâmetro, retorna o esperado', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    expect(() => getOpeningHours('Mon', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
    expect(() => getOpeningHours('Thursday', '09:00-BM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
    expect(() => getOpeningHours('Sunday', 'Z9:00-PM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Saturday', '09:0p-PM')).toThrow(/^The minutes should represent a number$/);
    expect(() => getOpeningHours('Tuesday', '14:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Friday', '03:60-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
