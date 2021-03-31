import React, {state, useState} from 'react'
import { Paper } from '@material-ui/core';

import './ShoppingList.css'
import AddToShoppingList from '../AddToShoppingList/AddToShoppingList';

export default function ShoppingList() {

    const [materials, setMaterials] = useState([
        { item: '', size: '', quantity: '' }
    ])

    const showMaterials = () => materials.map(material => <materialItem key={material.title} material={material} deleteMaterial={deleteMaterial} />)

    const addMaterial = (material) => {
        setMaterials({
            materials: [...materials, material]
        })
    }

    const deleteMaterial = (selectedMaterial) => {
        const newArray = materials.filter(material => material !== selectedMaterial)
        setMaterials({
            materials: newArray
        })
    }

    return (
        <div> 
            <AddToShoppingList addMaterial={ addMaterial }/>
              <Paper style={{
                padding: 10,
                marginBottom: 20,
                textAlign: 'center'

            }}>
                <h2>Shopping List</h2>
                <ul className="shopping-list">
                {showMaterials()}
                </ul>
            </Paper>
        </div>
    )
}
