import React from 'react'
import { Paper } from '@material-ui/core';

import './MaterialsOnHand.css'

export default function MaterialsOnHand() {

    return (
        <div> 
            <Paper style={{
                padding: 10
            }}>
                <h2>Materials On Hand</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 3</li>
                </ul>
            </Paper>
        </div>
    )
}
