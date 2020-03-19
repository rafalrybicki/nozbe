import React from 'react';
import './OptionListItem.css';
import Icon from '@material-ui/core/Icon';

function OptionListItem({icon, text, onClick}) {
  return (
    <div 
      className="option-list-item"
      onClick={onClick}
    >
      <Icon>{icon}</Icon>
      <span>{text}</span>
    </div>
  );
}

export default OptionListItem;