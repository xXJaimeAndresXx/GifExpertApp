const { GifGridItem } = require("../../components/GifGridItem")
import {shallow} from 'enzyme';
import React from 'react';

describe('Pruebas',()=>{

    const title= 'un titulo';
    const url= 'https://localhost/algo.jpg';
    const wrapper= shallow(<GifGridItem title= {title} url={url}/>)

    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de tener un parrafo con el titulo', () => {
        const p= wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })
    test('debe de tener la imagen igual al url y alt de los props',() => {

        const img=wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener animate__fadeIn', () => {
        
           const div = wrapper.find('div');
           const className= div.prop('className');

           expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    

})