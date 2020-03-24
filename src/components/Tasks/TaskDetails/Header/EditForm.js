import React, {useState, useEffect} from 'react';
import './EditForm.css'
import TextareaAutosize from 'react-textarea-autosize';

function EditForm({prevContent, onSave, closeForm}) {
  const [newContent, setNewContent] = useState(prevContent)
  const [disabled, setDisabled] = useState(true) 

  useEffect(() => {
    setDisabled(newContent.trim() === prevContent || newContent === '')
  }, [newContent, prevContent])

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
    onSave({content: newContent})
  } 

  const handleChange = (e) => {
    setNewContent(e.target.value)
    console.log(newContent === prevContent)
    console.log(newContent === e.target.value)
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
        onClick={() => closeForm()} 
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