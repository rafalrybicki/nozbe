import React from 'react';
import './ChecklistItem.css';
import Toggler from '../../../shared/Toggler';

function CheckListItem({completion, id, value, onClick, itemIndex, children}) {
  let className = completion ? "checklist-item completed" : "checklist-item";

  if (children) className += " check-all";

  return (
    <div
      className={className}
      onClick={() => onClick(itemIndex)}
    >
      <Toggler
        className={"checklist-toggler"}
        id={id}
      />
      <span>{value}</span>
      {children}
    </div> 
  )
}

export default CheckListItem;