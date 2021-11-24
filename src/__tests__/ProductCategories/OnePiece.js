import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { OnePiece } from '../../Components/ProductCategories';

const server = setupServer(rest.get('https://fierce-taiga-45635.herokuapp.com/crews', (req, res, ctx) => {
    const totalData = [
        { name: "doffy", price: 100, image: "https://i.ibb.co/Z2DV2MT/luffy.png" },
        { name: "lamingo", price: 500, image: "https://i.ibb.co/Z2DV2MT/luffy.png" }
    ];
    return res(
        ctx.status(200),
        ctx.json({
            data: { crew: totalData }
        })
    )
}))
beforeAll(() => server.listen());
afterAll(() => server.close());
beforeEach(() => server.restoreHandlers());

//console.log("mocking axios", axios)
describe('OnePiece', () => {
    test('renders essential parts', async ()=>{
        const promise = Promise.resolve()
        render(<OnePiece/>);
        //sort by price and crew filters are not visible in the initial render
        const sortBy = screen.getByText('sort by',{exact:false});
        const crew = screen.getByText('crew',{exact:false});
        expect(sortBy).not.toBeVisible();
        expect(crew).not.toBeVisible();
       //filter button is visible, when clicked it, sortBy and crew should be visible
        const filterButton = screen.getByText('filter',{exact:false});
        expect(filterButton).toBeVisible();
        fireEvent.click(filterButton);
        expect(sortBy).toBeVisible();
        expect(crew).toBeVisible();
        //filters include radio inputs
        const radioForCrews = screen.getAllByLabelText('pirates',{exact:false});
        const radioForSorting = screen.getAllByLabelText('high',{exact:false});
        const allRadios = [...radioForSorting,...radioForCrews]

        allRadios.forEach(radio=>{
            expect(radio.checked).toEqual(false);
            fireEvent.click(radio);
            expect(radio.checked).toEqual(true);
        }) ;
        await act(()=>promise)
    })
    test('fetches the data from the API and correctly renders it', async () => {
        const promise = Promise.resolve()
        render(<OnePiece />)
        setTimeout(async () => {
            const items = await screen.findAllByAltText('product-image');
            expect(items).toHaveLength(2);
        }, 1000)
        await act(()=>promise)
        //     screen.debug()
    })
})
