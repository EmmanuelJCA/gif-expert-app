import { render, screen } from "@testing-library/react"
import { default as GifItem } from "../../src/components/GifItem"

describe('Test on <GifItem />', () => {

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('must match the snapshot', () => {

         const { container } = render(
           <GifItem 
                title={ title } 
                url={ url }
           />
        )
        expect( container ).toMatchSnapshot()

    })

    test('should display the image with the URL and ALT indicated', () => {
        
        render(
            <GifItem 
                 title={ title } 
                 url={ url }
            />
         )
        // screen.debug()
        const { src, alt} = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

    test('should show the title of the component', () => {

        render(
            <GifItem 
                 title={ title } 
                 url={ url }
            />
         )
         expect( screen.getByText( title ) ).toBeTruthy()

    })

})