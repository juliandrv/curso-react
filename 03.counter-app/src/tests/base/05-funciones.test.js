import { getUsuario, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'juliandrv'
    }
    const user = getUsuario();
    expect(user).toEqual(userTest)
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const activeUser = {
      uid: 'ABC567',
      username: 'Julián'
  }
    const usuarioActivo = getUsuarioActivo('Julián')
    expect(usuarioActivo).toEqual(activeUser)
  })

})
