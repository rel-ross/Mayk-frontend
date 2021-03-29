import React from 'react'
import { Paper } from '@material-ui/core';
import { useReducer } from 'react'

import './AddToShoppingList.css'

const initialState = {
    item: '',
    size: '',
    quantity: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

export default function AddToShoppingList() {
        const [state, dispatch] = useReducer(reducer, initialState)
    
    
        const handleChange = (event) => {
           dispatch({ field: event.target.name, value: event.target.value })
        }
    
        const { item, size, quantity } = state
    
        const handleSubmit = (event) => {
            event.preventDefault()
            // addShoppingItem(state)
            fetch('http://localhost:3000/portfolio_items', {
                method: "POST",
                headers: {
                    "Content-type": "application/json" 
                },
                body: JSON.stringify({
                    portfolioItem: { item, size, quantity }
                })
            })
            console.log(JSON.stringify({
                item, size, quantity
            }))
        }  

    return (
        <div> 
            <Paper style={{
                padding: 10,
                marginBottom: 10
            
            }}>
                <h2>Add Material</h2>
                <ul>
                <form className="shopping-item-form" onSubmit={ handleSubmit }>
                    <label>Item:</label>
                    <input name="item" value={ item } onChange={ handleChange }></input>
                    
                    <label>Size:</label>
                    <input name="size" value={ size } onChange={ handleChange }></input>

                    <label>Quantity</label>
                    <input name="quantity" value={ quantity } onChange={ handleChange }></input>

                    <button type="submit" onSubmit={ handleSubmit }>Submit</button>
                </form>
                </ul>
            </Paper>
        </div>
    )
}
