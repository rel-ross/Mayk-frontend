import React from 'react'
import UploadImage from '../UploadImage/UploadImage'

export default function NewProject({ fileHasBeenLoaded, url, file, handleFileChange, handleUpload }) {
    return (
        <div>
        <h1>Start a New Project</h1>
            <form>
                <label>Project Name</label>
                <input name="project-name"></input>
                <button type="submit">Submit</button>
            </form>
            <UploadImage fileHasBeenLoaded={ fileHasBeenLoaded } file={ file } url={ url } handleUpload={ handleUpload } handleFileChange={ handleFileChange } file={ file }/>
        </div>
    )
}
