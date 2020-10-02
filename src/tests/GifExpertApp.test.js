import {shallow} from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import React from 'react'
import '@testing-library/jest-dom'

describe('Pruebas en GifExpertApp', () => {
    test('debe mostrarse correctamente', () => {
        
        const wrapper=shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorias', () => {
        
        const categories=['One Punch', 'DragonBall',];
        const wrapper= shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
