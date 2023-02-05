import { fireEvent, render, screen } from '@testing-library/react'
import { default as GifExpertApp } from '../src/GifExpertApp'

describe('Tests on <GifExpertApp />', () => {

    test('should match the snapshot', () => {

        const { container } = render( <GifExpertApp /> )
        expect( container ).toMatchSnapshot()

    })

    test('should add the category if it does not exist', () => {

        const inputValue = 'The Weeknd'

        render( <GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {
            target: { value: inputValue}
        })
        fireEvent.submit( form )
        screen.debug()
        expect( screen.getByText( inputValue ) ).toBeTruthy()

    })

    test('shouldnt add the category if it exists', () => {

        const inputValue = 'The Weeknd'

        render( <GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {
            target: { value: inputValue}
        })
        fireEvent.submit( form )

        fireEvent.input(input, {
            target: { value: inputValue}
        })
        fireEvent.submit( form )

        expect( screen.getAllByText( inputValue ).length ).not.toBeGreaterThan(1)

    })

})