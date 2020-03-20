import React, { useState } from 'react';
import './TextComment.css';
import TextareaAutosize from 'react-textarea-autosize';

function TextComment(props) {
  const [value, setValue] = useState(''); 

  const addComment = () => {
    const date = new Date();

    const newComment = {
      type: 'text',
      content: value,
      author: 'ThisCode ShouldBeChanged',
      created_at: date,
      updated_at: date,
      id: Math.random()
    }

    props.addComment(newComment)
  }

  return (
    <>
      <button 
        disabled={value === ''}
        className="btn-green"
        onClick={addComment}
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