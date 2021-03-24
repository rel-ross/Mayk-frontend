import React, {useReducer} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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
            <button type="button" onClick={handleOpen}>
        + New Project
      </button>
      <Modal
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
                <button type="submit">Submit</button>
            </form>
            <UploadImage fileHasBeenLoaded={ fileHasBeenLoaded } file={ file } url={ url } handleUpload={ handleUpload } handleFileChange={ handleFileChange } file={ file }/>
         

        </div>
      </Modal>
        </div>
    )
}
