import React, { useState } from 'react';
import './ChecklistForm.css'
import { v4 as uuid } from 'uuid';
import ChecklistItem from './ChecklistItem'

function ChecklistForm({addChecklist, editMode, oldItems=[], editComment, closeForm}) {
  const getNewItem = () => ({
    value: '', 
    completion: false, 
    id: uuid()
  })

  const [items, setItems] = useState(oldItems.concat([getNewItem()]))
  
  const updateItemValue = (newValue, index) => {
    const newItems = [...items];
    newItems[index].value = newValue;
    setItems(newItems)
  }

  const toggleCompletion = (index) => {
    const newItems = [...items];
    newItems[index].completion = !newItems[index].completion;
    setItems(newItems)
  }

  const handleSave = () => {
    const date = new Date();

    const content = items.filter(item => item.value.trim() !== '');

    const newComment = {
      type: 'checklist',
      content,
      author: 'ChangeThis User',
      created_at: date,
      updated_at: date,
      id: Math.random()
    }

    if (editMode) {
      editComment(content)
      closeForm()
    } else {
      addChecklist(newComment)
    }
  }

  const disabled = items[items.length - 1].value.trim() === '';

  return (
    <div className={editMode ? "checklist-form edit" : "checklist-form"}>
      <button
        onClick={handleSave}
        className="save btn-green"
        disabled={disabled}
      >Save</button>

      {items.map( (item,i) => 
        <ChecklistItem 
          prevValue={item.value}
          key={i}
          index={i} 
          completion={item.completion} 
          updateItemValue={updateItemValue} 
          toggleCompletion={toggleCompletion}
          autoFocus={i === items.length - 1}
          addNewItem={() => setItems([...items, getNewItem()])}
        />
      )}

      <button 
        onClick={() => setItems([...items, getNewItem()]) }
        className="add"
        disabled={disabled}
      >+</button>
    </div>
  );
}

export default ChecklistForm;