import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Array of Allowed file types

  const types = ['image/png', 'image/jpeg'];

  const changleHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changleHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {/* if we have an error ; output a div that says error */}
        { error && <div className="error">{ error }</div>}
        {/* if valid file name ; output div with file name */}
        { file && <div>{ file.name }</div> }
        {/*   */}
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;
