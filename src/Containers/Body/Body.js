import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Body.css'

import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader'
import ShoppingList from '../../Components/ShoppingList/ShoppingList'
import MaterialsOnHand from '../../Components/MaterialsOnHandList/MaterialsOnHand'
import Canvas from '../../Components/Canvas/Canvas'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     container: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

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
                    <Grid item xs={7}>
                        <Canvas />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
