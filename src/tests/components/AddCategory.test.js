const { AddCategory } = require("../../components/AddCategory")
import { shallow } from 'enzyme';
import React from 'react'
import '@testing-library/jest-dom';
describe('Pruebas en AddCategory',()=>{
    const setCategories= jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    })
    test('  Debe mostrarse correctamente',()=>{


        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
            const input= wrapper.find('input');
            const value= 'Hola mundo'
            input.simulate('change', {target:{value: value}});

            wrapper.find('p').text
            expect(wrapper.find('p').text().trim()).toBe(value);
    })
    test('No debe de postear la informacion con submit', () => {
       wrapper.find('form').simulate('submit',{preventDefault(){}});
       
       expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar setCategories y limpiar la caja de texto', () => {
        const value='Hola Mundo';
        
        wrapper.find('input').simulate('change', {target:{value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1);
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function));



        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    

})