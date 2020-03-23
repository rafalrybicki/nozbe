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
    const date = new Date();

    items.map(item => item.value.trim())

    const newComment = {
      type: 'checklist',
      content: items.filter(item => item.value !== ''),
      author: 'ThisCode ShouldBeChanged',
      created_at: date,
      updated_at: date,
      id: Math.random()
    }

    props.addComment(newComment)
  }

  return (
    <div className="new-checklist">
      <button
        onClick={addComment}
        className="btn-green"
        disabled={items[items.length-1].value.trim() === ''}
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