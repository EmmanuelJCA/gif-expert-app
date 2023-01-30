import { useState } from "react"

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = ( event ) => {
        event.preventDefault()

        if( inputValue.trim().length <= 1 ) return

        setInputValue('')
        onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type="text" 
            placeholder="Buscar gif"
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
    )
}

export default AddCategory