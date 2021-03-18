import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
  test('debe retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(heroe => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('debe retornar undefined si héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    const heroeOwner = heroes.filter(heroe => heroe.owner === owner);
    expect(heroes).toEqual(heroeOwner);
  });

  test('debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    const heroeOwner = heroes.filter(heroe => heroe.owner === owner);
    expect(heroes).toEqual(heroeOwner);
  });

})
