import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar Hola + nombre', () => {
    const nombre = 'Julián';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre);
  })

  //getSaludo debe retornar Hola Diana si no hay argumento nombre
  test('getSaludo debe retornar Hola Diana si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Diana');
  })
})