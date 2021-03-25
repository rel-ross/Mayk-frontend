import React, {useReducer} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UploadImage from '../UploadImage/UploadImage'


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

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (event) => {
        dispatch({ field: event.target.name, value: event.target.value })
    }
    
    const { projectName, lineCoordinates, image} = state

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/drawings', {
            method: "POST",
            headers: {
                "Content-type": "application/json" 
            },
            body: JSON.stringify(
                { projectName, lineCoordinates, image }
            )
        })
    }

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
                ? `There was an error: ${error}`
                // Otherwise, show the URL of the uploaded file
                : `File was uploaded to: <a href="${data}">${data}</a>`
                console.log(data)
        }).catch(error => {
            // If there was a problem, show the error message
            console.log(`There was an error: ${error.message}`)
        });
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
    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      }; 

    return (
        <div className="new-project">
            <button className="add-project-button" onClick={handleOpen}>
                <AddCircleIcon fontSize="large"/>
            </button>
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal">
                <h2 id="simple-modal-title">Start a New Project</h2>
                    <form onSubmit={ handleSubmit }>
                        <label>Project Name</label>
                        <input name="projectName" value={ projectName } onChange={ handleChange }></input>
                        <button type="submit">✓</button>
                    </form>
                    <form enctype="multipart/form-data" onSubmit={ handleFileSubmit }>
                        <label for="file">File</label>
                        <input id="file" name="file" type="file" required />

                        <input type="submit" value="Upload File" />

                        <div id="message"></div>
                    </form> */}
                    <UploadImage fileHasBeenLoaded={ fileHasBeenLoaded } file={ file } url={ url } handleUpload={ handleUpload } handleFileChange={ handleFileChange } file={ file }/>
                {/* </div>
            </Modal> */}
        </div>
    )
}
