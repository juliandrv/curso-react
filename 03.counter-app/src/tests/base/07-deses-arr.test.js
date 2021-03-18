import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr.js', () => {
  test('debe retornar un string y un number', () => {
    const [strings, numbers] = retornaArreglo();
    // expect(arr).toEqual(['ABC', 123]);
    expect(strings).toBe('ABC');
    expect(typeof (strings)).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof (numbers)).toBe('number');
  })
})
