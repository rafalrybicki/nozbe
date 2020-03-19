import React, {useState} from 'react';
import './EditForm.css'
import TextareaAutosize from 'react-textarea-autosize';

function EditForm({prevContent, onSave}) {
  const [newContent, setNewContent] = useState(prevContent)
  const [disabled, setDisabled] = useState(true) 

  const handleSubmit = (e) => {
    e.preventDefault();
    hideEditForm();
    onSave({content: newContent})
  } 

  const handleChange = (e) => {
    setNewContent(e.target.value.trim())
    
    if (newContent === prevContent) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const hideEditForm = () => {
    document.querySelector('.header').classList.remove('show-form')
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <TextareaAutosize 
        name="newContent"
        onChange={handleChange}
        value={newContent}
      />
      <button 
        type="button" 
        onClick={hideEditForm} 
      >Cancel</button>
      <button 
        type="submit" 
        disabled={disabled}
        className="btn-green"
      >Save</button>
    </form>
  );
}

export default EditForm;