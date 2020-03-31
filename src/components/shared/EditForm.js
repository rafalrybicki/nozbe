import React, { useState } from 'react';
import './EditForm.css'
import TextareaAutosize from 'react-textarea-autosize';

function EditForm({prevContent, onSave, closeForm}) {
  const [newContent, setNewContent] = useState(prevContent)

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
    onSave({content: newContent})
  } 

  const handleChange = (e) => {
    setNewContent(e.target.value)
  }


  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <TextareaAutosize 
        name="newContent"
        onChange={handleChange}
        value={newContent}
        autoFocus
      />
      <button 
        type="button" 
        onClick={() => closeForm()} 
      >Cancel</button>
      <button 
        type="submit" 
        disabled={newContent === prevContent || newContent === ''}
        className="btn-green"
      >Save</button>
    </form>
  );
}

export default EditForm;