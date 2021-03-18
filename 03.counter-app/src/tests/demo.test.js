describe('Pruebas en el archivo demo.js', () => {
  test('los strings deben ser iguales', () => {
    //1. inicialización
    const mensaje = 'Hola Mundo';

    //2. estímulo
    const mensaje2 = `Hola Mundo`;

    //3. observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  })
});
