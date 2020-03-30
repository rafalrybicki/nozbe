import React, { useState } from 'react';
import './ChecklistForm.css'
import { v4 as uuid } from 'uuid';
import ChecklistItem from './ChecklistItem'

function ChecklistForm({addChecklist}) {
  const getNewItem = () => ({
    value: '', 
    completion: false, 
    id: uuid()
  })

  const [items, setItems] = useState([ getNewItem() ])
  
  const updateItemValue = (newValue, index) => {
    let newItems = [...items];
    newItems[index].value = newValue;
    setItems(newItems)
  }

  const toggleCompletion = (index) => {
    console.log(index)
    let newItems = [...items];
    newItems[index].completion = !newItems[index].completion;
    setItems(newItems)
  }

  const addComment = () => {
    const date = new Date();

    const newComment = {
      type: 'checklist',
      content: items.filter(item => item.value.trim() !== ''),
      author: 'ChangeThis User',
      created_at: date,
      updated_at: date,
      id: Math.random()
    }

    addChecklist(newComment)
  }

  const disabled = items[items.length - 1].value.trim() === '' ? true : false;

  return (
    <div className="new-checklist">
      <button
        onClick={addComment}
        className="btn-green"
        disabled={disabled && items.length === 1}
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
        addNewItem={() => setItems([...items, getNewItem()])}
        className="add"
        disabled={disabled}
      >+</button>
    </div>
  );
}

export default ChecklistForm;