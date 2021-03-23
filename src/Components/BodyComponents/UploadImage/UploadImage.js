import React, { useState } from 'react'

export default function UploadImage({ file, url, handleFileChange, handleUpload, fileHasBeenLoaded} ) {
  
    // const [fileLoaded, setFileLoaded] = useState(false)

    return (
      <div>
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button disabled={!file}>Upload</button>
        </form>
        <button onClick={fileHasBeenLoaded}>Set background</button>

      </div>
    );
  }
