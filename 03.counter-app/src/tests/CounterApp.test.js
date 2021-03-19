import '../setUpTests'
import { shallow } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counter = wrapper.find('h2').text().trim();
    expect(counter).toBe(`${value}`)
  });

  test('debe decrementar el contador con el botón -1', () => {
    wrapper.find('button').at(0).simulate('click', {});
    const counter = wrapper.find('h2').text().trim();
    expect(counter).toBe('9')
  });

  test('debe incrementar el contador con el botón +1', () => {
    wrapper.find('button').at(1).simulate('click', {});
    const counter = wrapper.find('h2').text().trim();
    expect(counter).toBe('11')
  });

  test('debe reestablecer el contador a 10', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find('button').at(1).simulate('click', {});
    wrapper.find('button').at(1).simulate('click', {});
    wrapper.find('button').at(2).simulate('click', {});
    const counter = wrapper.find('h2').text().trim();
    expect(counter).toBe('100')
  });

})