import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Electronics } from '../../Components/ProductCategories';

const server = setupServer(rest.get('https://fierce-taiga-45635.herokuapp.com/electronics', (req, res, ctx) => {
    const totalData = [
        {
            name: "Model X",
            image: "https://i.ibb.co/y4WRRRh/modelX.png",
            price: 98940,
            brand: "Tesla"
        },
        {
            name: "Model X",
            image: "https://i.ibb.co/y4WRRRh/modelX.png",
            price: 98940,
            brand: "Tesla"
        }

    ];
    return res(
        ctx.status(200),
        ctx.json({
            data: { totalData }
        })
    )
}))
beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.restoreHandlers());

//console.log("mocking axios", axios)
describe('Electronics', () => {
    test('renders essential parts', async () => {
        const promise = Promise.resolve()
        render(<Electronics />);
        //sort by price and brand ilters are not visible in the initial render
        const sortBy = screen.getByText('sort by', { exact: false });
        const brand = screen.getByText('brand', { exact: false });
        expect(sortBy).not.toBeVisible();
        expect(brand).not.toBeVisible();
        //filter button is visible, when clicked it, sortBy and brand should be visible
        const filterButton = screen.getByText('filter', { exact: false });
        expect(filterButton).toBeVisible();
        fireEvent.click(filterButton);
        expect(sortBy).toBeVisible();
        expect(brand).toBeVisible();
        
        //filters include radio inputs

        const appleBrand = screen.getByLabelText('Apple',{exact:false});
        const teslaBrand = screen.getByLabelText('tesla',{exact:false});
        const spacexBrand = screen.getByLabelText('spacex',{exact:false});

        const radioForSorting = screen.getAllByLabelText('high', { exact: false });
        const allRadios = [...radioForSorting,appleBrand,teslaBrand,spacexBrand]

        allRadios.forEach(radio => {
            expect(radio.checked).toEqual(false);
            fireEvent.click(radio);
            expect(radio.checked).toEqual(true);
        })
        await act(()=>promise)
    })
    test('fetches the data from the API and correctly renders it', async () => {
        const promise = Promise.resolve()
        render(<Electronics />)
       setTimeout(async () => {
            const items = await screen.findAllByAltText('product-image');
            expect(items).toHaveLength(2);
        }, 1000)
        await act(()=>promise)
        //     screen.debug()
    })
})
