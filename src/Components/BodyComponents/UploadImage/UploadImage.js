import React from 'react'

export default function UploadImage({ file, url, handleFileChange, handleUpload} ) {
  
    return (
      <div>
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button disabled={!file}>Upload</button>
        </form>
        <img src={url} alt="" />
      </div>
    );
  }
