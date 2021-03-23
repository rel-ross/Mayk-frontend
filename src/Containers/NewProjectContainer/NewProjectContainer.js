import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import ReactTooltip from 'react-tooltip';

import ProjectHeader from '../../Components/BodyComponents/ProjectHeader/ProjectHeader'
import ShoppingList from '../../Components/BodyComponents/ShoppingList/ShoppingList'
import MaterialsOnHand from '../../Components/BodyComponents/MaterialsOnHandList/MaterialsOnHand'
import Canvas from '../../Components/BodyComponents/Canvas/Canvas'
import UploadImage from '../../Components/BodyComponents/UploadImage/UploadImage'
import NewProject from '../../Components/BodyComponents/NewProject/NewProject'

import './NewProjectContainer.css'

export default function Body({url, file, handleFileChange, handleUpload}) {
    // const classes = useStyles();
    const [spacing, setSpacing] = React.useState(3);
    const [fileLoaded, setFileLoaded] = useState(false)

    const fileHasBeenLoaded = () => {
        setFileLoaded(true)
    }
    
    return (
        <div className="project-show-container">
            <div >
                <Grid container spacing={spacing}>
                    <Grid item xs={12}>
                        <ProjectHeader />
                        <p data-tip="hello world">Tooltip</p>
                        <ReactTooltip />
                        
                    </Grid>
                    <Grid item xs={2}>
                            <ShoppingList />
                            <MaterialsOnHand />
                    </Grid>
                    <Grid item xs={3}>
                        {
                        fileLoaded
                        ?<Canvas url={ url } file={ file }/>
                        : <NewProject fileHasBeenLoaded={ fileHasBeenLoaded } file={ file } url={ url } handleUpload={ handleUpload } handleFileChange={ handleFileChange } file={ file }/>
                        
                        }
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
