import {shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
import '@testing-library/jest-dom'

describe('Pruebas en el GifGrid', () => {

    const category= 'One Punch';
    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper= shallow( <GifGrid category={category}/>);
        expect (wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        const gifs=[{
            id: 'ABC',
            url: 'https://hola.ke.ase',
            title: 'Hola'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper= shallow( <GifGrid category={category}/>);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
    
    
})
