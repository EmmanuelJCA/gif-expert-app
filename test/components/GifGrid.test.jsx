import { render, screen } from '@testing-library/react'
import { default as GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Tests on <GifGrid />', () => {

    const category = 'One Punch'

    test('should match the snapshot', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        const { container } = render(
            <GifGrid category={ category } />
        )
        expect( container ).toMatchSnapshot()

    })

    test('should show the loading only', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(
            <GifGrid category={ category } />
        )
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText( category ) )

    })

    test('should show items when images are loaded via useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://gif/saitama.png'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://gif/goku.png'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        })

        render(
            <GifGrid category={ category } />
        )

        expect( screen.getAllByRole('img').length ).toBe(2)

    })

})