import React, {useReducer, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UploadImage from '../UploadImage/UploadImage'
import Canvas from '../Canvas/Canvas'


import './NewProject.css'

const initialState = {
    image: '',
    projectName: '',
    lineCoordinates: ''
}


function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}
export default function NewProject({ fileHasBeenLoaded, url, file, handleFileChange, handleUpload }) {

    const [displayedProject, setDisplayedProject] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (event) => {
        dispatch({ field: event.target.name, value: event.target.value })
    }
    
    const { projectName, lineCoordinates, image} = state

    const [fileLoaded, setFileLoaded] = useState(false)
    const [open, setOpen] = useState(false);

    const handleFileSubmit = (event) => {
        event.preventDefault();
        const URL= "http://localhost:4000/upload"
        const formData = new FormData(event.target);
        fetch(URL, {
            method: "POST",
            // This contains the file to be uploaded
            body: new FormData(event.target)
        }).then(response => response.json())
        .then(({data, error}) => {
            const message = error
                // If there was an error, show it
                ? console.log(`There was an error: ${error}`)
                // Otherwise, show the URL of the uploaded file
                : console.log(`File was uploaded to:${data}`)
            fetch('http://localhost:4000/drawings', {
            method: "POST",
            headers: {
                "Content-type": "application/json" 
            },
            body: JSON.stringify(
                { projectName, lineCoordinates, image: data }
            )
        }).then(response => response.json())  
        //this is setting the dispath as new en
            .then(result => dispatch({ field: 'image', value: result[0].image}))
        }).catch(error => {
            // If there was a problem, show the error message
            console.log(`There was an error: ${error.message}`)
        });
    }

    const startProject = (event) => {
    //    fetch('http://localhost:4000/drawings/75')
    //     .then(response => response.json())
    //     .then(result => setDisplayedProject(result))
    //     console.log("returned startProject")
        setOpen(false);
        setFileLoaded(true)
    }


    const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
    }));

    const classes = useStyles();
   

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }; 

    return (
        <div className="new-project">
            <button className="add-project-button" onClick={handleOpen}>
                <AddCircleIcon className="circle-icon" fontSize="large"/>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal">
                <h2 id="simple-modal-title">Start a New Project</h2>
                    <form>
                        <label>Project Name</label>
                        <input name="projectName" value={ projectName } onChange={ handleChange }></input>
                    </form>
                    <form encType="multipart/form-data" onSubmit={ handleFileSubmit }>
                        <label htmlFor="image"></label>
                        <input id="image" name="image" type="file" required />
                        <input type="submit" name="image" value="Upload" />
                    </form>
                    <button type="submit" onClick={ startProject }>Start</button>
                    {/* <UploadImage fileHasBeenLoaded={ fileHasBeenLoaded } file={ file } url={ url } handleUpload={ handleUpload } handleFileChange={ handleFileChange } file={ file }/> */}
                </div>
            </Modal>
            { fileLoaded 
            ? <Canvas projectName={ projectName } imageProp={ image } displayedProject={ displayedProject }/>
            : null
            }
        </div>
    )
}
