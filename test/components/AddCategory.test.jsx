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

})