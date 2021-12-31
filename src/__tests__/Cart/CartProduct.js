import React from 'react';
import { CartProduct } from '../../Components/Cart';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { addProduct, removeProduct } from '../../State/BasketSlice'; 

describe('CartProduct', () => {
    test('renders the count', () => {
        const props = {
            dispatch: jest.fn(),
            productData: {
                name: "Model S Plaid",
                price: 5,
                count:1
            }
        }
        render(<CartProduct {...props} />);
        expect(screen.getByTestId('price')).toHaveTextContent('$ 5.00')

    })
    test('dispatches increment with right action', () => {
        const props = {
            dispatch: jest.fn(),
            productData: {
                name: "Model S Plaid",
                price: 5,
                count:1
            }
        }
        render(<CartProduct {...props} />);
        const incrementButton = screen.getByTestId('plusButton');
        fireEvent.click(incrementButton)

        expect(props.dispatch).toHaveBeenCalledWith(addProduct(
            {
                name:props.productData.name ,
                price:props.productData.price,
                count:props.productData.count
            }
        ))
        //expect(screen.getByTestId('price')).toHaveTextContent('$ 10.00')

    })
    test('dispatches decrement with right action', () => {
        const props = {
            dispatch: jest.fn(),
            productData: {
                name: "Model S Plaid",
                price: 5,
                count:1
            }
        }
        render(<CartProduct {...props} />);
        const decrementButton = screen.getByTestId('minusButton');
        fireEvent.click(decrementButton)

        expect(props.dispatch).toHaveBeenCalledWith(removeProduct(
            {
                name:props.productData.name ,
                price:props.productData.price,
                count:props.productData.count
            }
        ))
        //expect(screen.getByTestId('price')).toHaveTextContent('$ 10.00')

    })
})