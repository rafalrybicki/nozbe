import React from 'react';
import './ChecklistItem.css'
import Toggler from '../../../../shared/Toggler';
import TextareaAutosize from 'react-textarea-autosize';

function ChecklistItem({index, prevValue, completion, autoFocus, updateItemValue, addNewItem, toggleCompletion}) {

  const onTextareaChange = (e) => {
    if (e.nativeEvent.inputType === 'insertLineBreak' && prevValue.length > 0) {
      addNewItem()
    } else if (e.target.value.trim() || prevValue.length === 1) {
      updateItemValue(e.target.value, index)
    }
  }

  return (
    <div className={completion ? "checklist-item completed" : "checklist-item"} >
      <Toggler 
        className={"checklist-toggler"}
        id={index}
        onClick={toggleCompletion} 
      />
      <TextareaAutosize
        onChange={onTextareaChange}
        className="checklist-value"
        value={prevValue}
        autoFocus={autoFocus}
      />
    </div>
  );
}

export default ChecklistItem;