        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import '@testing-library/jest-dom'
        import { rest } from 'msw';
        import { setupServer } from 'msw/node';

        import { OnePiece } from '.';

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

            test('fetches the data from the API and correctly renders it', async () => {
                await render(<OnePiece />)
                const items = await screen.findAllByAltText('product-image');
                expect(items).toHaveLength(2);
                //     screen.debug()
            })
        })
