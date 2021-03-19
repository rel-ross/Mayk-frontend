import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './Body.css'

import ProjectHeader from '../../Components/BodyComponents/ProjectHeader/ProjectHeader'
import ShoppingList from '../../Components/BodyComponents/ShoppingList/ShoppingList'
import MaterialsOnHand from '../../Components/BodyComponents/MaterialsOnHandList/MaterialsOnHand'
import Canvas from '../../Components/BodyComponents/Canvas/Canvas'

export default function Body() {
    // const classes = useStyles();
    const [spacing, setSpacing] = React.useState(3);

    return (
        <div className="body">
            <div >
                <Grid container spacing={spacing}>
                    <Grid item xs={12}>
                        <ProjectHeader />
                
                    </Grid>
                    <Grid item xs={2}>
                            <ShoppingList />
                            <MaterialsOnHand />
                    </Grid>
                    <Grid item xs={3}>
                        <Canvas />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
