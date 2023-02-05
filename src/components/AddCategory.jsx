import { useState } from "react"
import PropTypes from 'prop-types'
import { logDOM } from "@testing-library/react"

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
        <form onSubmit={ handleSubmit } aria-label="form">
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}