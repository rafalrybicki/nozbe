import React, { useState } from 'react';
import './TextComment.css';
import TextareaAutosize from 'react-textarea-autosize';

function TextComment(props) {
  const [value, setValue] = useState(''); 

  return (
    <>
      <button 
        disabled={value === ''}
        className="btn-green"
      >Save</button>
      <TextareaAutosize
        onChange={(e) => setValue(e.target.value.trim())}
        minRows={7}
        placeholder="Add comment (ENTER)"
      />
    </>
  );
}

export default TextComment;