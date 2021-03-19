// import "@testing-library/jest-dom/extend-expect";
// import { render } from "@testing-library/react";
import '../setUpTests'
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe mostrar el saludo Hola, soy Julián', () => {
  //   const saludo = 'Hola, soy Julián';

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // })
  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, soy Julián';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, soy Julián';
    const subtitulo = 'Subtitulo de prueba';
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subtitulo}
      />
    );
    const textParrafo = wrapper.find('p').text();
    expect(textParrafo).toBe(subtitulo)
  });
})
