import { getImagen } from "../../base/11-async-await"


describe('Pruebas en 11-async-await.js', () => {
  test('debe retornar una url de imagen', async () => {
    const imageUrl = await getImagen();
    expect(imageUrl.includes('https://')).toBe(true)
  })

})
