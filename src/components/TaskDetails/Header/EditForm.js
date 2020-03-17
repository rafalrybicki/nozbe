import React, {useState} from 'react';
import './EditForm.css'
import TextareaAutosize from 'react-textarea-autosize';

function EditForm({oldContent}) {
  const [newContent, setNewContent] = useState(oldContent)
  const [disabled, setDisabled] = useState(true) 

  const handleSubmit = (e) => {
    e.preventDefault() 
    hideEditForm()
  } 

  const handleChange = (e) => {
    setNewContent(e.target.value.trim())
    
    if (newContent === oldContent) {
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