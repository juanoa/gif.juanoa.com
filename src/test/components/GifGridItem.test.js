import {GifGridItem} from "../../components/GifGridItem";

const {shallow} = require("enzyme");


describe('Pruebas en GifGridItem', function () {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />)


    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe de tener una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('El div debe tener la clase animated__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animated__fadeIn')).toBe(false);
    })
});