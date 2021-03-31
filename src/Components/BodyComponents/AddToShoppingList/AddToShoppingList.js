import React, { state, useState } from 'react'
import { Paper } from '@material-ui/core';
import { useReducer } from 'react'

import './AddToShoppingList.css'

// const initialState = {
//     name: '',
//     size: '',
//     quantity: ''
// }

// function reducer(state, { field, value }) {
//     return {
//         ...state,
//         [field]: value
//     }
// }

export default function AddToShoppingList({ addTodo }) {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [materialItem, setMaterialItem] = useState({
        item: '',
        size: '',
        quantity: ''
    })

    const handleChange = (event) => {
        setMaterialItem({
            [event.target.name]:  event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
            addTodo(materialItem)
    }

    return (
        <div>
            <Paper style={{
                padding: 10,
                marginBottom: 10,
                textAlign: 'center',
                justifyContent: 'center'

            }}>
                <h2>Add Material</h2>
                <ul>
                <form onSubmit={ handleSubmit }>
                    <label>Item:</label>
                    <input name="item" value={state.item} onChange={ handleChange }></input>
                    <label>Size:</label>
                    <input name="size" value={ state.size } onChange={ handleChange }></input>
                    <label>Quantity:</label>
                    <input name="quantity" value={ state.quantity } onChange={ handleChange }></input>
                    <button type="submit">Submit</button>
                </form>
                </ul>
            </Paper>
        </div>
    )
}
