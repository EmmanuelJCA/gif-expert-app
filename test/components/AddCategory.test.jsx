import { fireEvent, render, screen } from '@testing-library/react'
import { default as AddCategory} from '../../src/components/AddCategory'

describe('Tests on <AddCategory />', () => {

    test('should change the value in the text box', () => {

        render( 
            <AddCategory onNewCategory={() => {}} />
        )
        const input = screen.getByRole('textbox')

        fireEvent.input( input, { 
                target: { value: 'Saitama'} 
            } 
        )

        expect( input.value ).toBe('Saitama')

    })

    test('should fire onNewCategory() if the input has a value', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()

        render( 
            <AddCategory onNewCategory={ onNewCategory } />
        )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { 
                target: { value: inputValue} 
            } 
        )
        fireEvent.submit( form )
        // screen.debug()
        expect( input.value ).toBe('')

        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

    })

    test('onNewCategory() should not be called if the input is empty', () => {

        const onNewCategory = jest.fn()

        render( 
            <AddCategory onNewCategory={ onNewCategory } />
        )

        const form = screen.getByRole('form')

        fireEvent.submit( form )
        // screen.debug()
        expect( onNewCategory ).not.toHaveBeenCalled()

    })

})