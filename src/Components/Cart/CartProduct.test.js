import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../State/Store';

import CartProduct from './CartProduct';
describe('CartProduct', () => {
    test('renders CartProduct component', () => {
        render(
            <Provider store={Store}>
                <CartProduct productData={{
                    name:"lala",
                    price:5,
                    image:"lsdkfmsd"
                }}/>
            </Provider>

        );
        //screen.debug();
    })
})

