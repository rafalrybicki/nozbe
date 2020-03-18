import React, { useState } from 'react';
import './NewChecklist.css'
import { v4 as uuid } from 'uuid';
import ChecklistItem from './ChecklistItem'

function NewChecklist(props) {
  const [items, setItems] = useState([
    { 
      value: '',
      completion: false, 
      id: uuid(), 
    }
  ])

  const addNewItem = () => {
    setItems([...items, { value: '', completion: false, id: uuid() }])
  }

  const updateItemValue = (newValue, index) => {
    let newItems = [...items];
    newItems[index].value = newValue;
    setItems(newItems)
  }

  const toggleCompletion = (index) => {
    let newItems = [...items];
    newItems[index].completion = !newItems[index].completion;
    setItems(newItems)
  }

  const addComment = () => {
    console.log(items)
    //redux here
  }

  return (
    <div className="new-checklist">
      <button
        onClick={addComment}
        className="btn-green"
      >Save</button>

      {items.map( (item,i) => 
        <ChecklistItem 
          key={i}
          index={i} 
          completion={item.completion} 
          updateItemValue={updateItemValue} 
          toggleCompletion={toggleCompletion}
        />
      )}

      <button 
        onClick={addNewItem}
        className="add"
        disabled={items[items.length-1].value === ''}
      >+</button>
    </div>
  );
}

export default NewChecklist;