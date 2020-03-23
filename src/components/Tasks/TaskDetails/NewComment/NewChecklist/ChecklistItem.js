import React from 'react';
import './ChecklistItem.css'
import Toggler from '../../../../shared/Toggler';
import TextareaAutosize from 'react-textarea-autosize';

function ChecklistItem({index, completion, updateItemValue, toggleCompletion}) {

  const onTextareaChange = (e) => {
    updateItemValue(e.target.value, index)
  }

  return (
    <div className={completion ? "checklist-item completed" : "checklist-item"} >
      <Toggler 
        completion={completion} 
        onclick={() => toggleCompletion(index)} 
      />
      <TextareaAutosize 
        onChange={onTextareaChange}
      />
    </div>
  );
}

export default ChecklistItem;