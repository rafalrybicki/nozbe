import React, { useState } from 'react';
import './SelectCommentType.css'
import Icon from '@material-ui/core/Icon';

function SelectCommentType(props) {
  const options = [
    { value: 'Text', icon: 'subject' },
    { value: 'Checklist', icon: 'list' },
    { value: 'Attachment', icon: 'attach_file' },
  ];
  
  const [current, setValue] = useState(options[0]);
 
  const showOptions = (e) => {
    document.querySelector('.options').classList.remove('hide')
  }

  const hideOptions = (e) => {
    e.stopPropagation()
    const index = e.currentTarget.getAttribute('data-id');
    const type = e.currentTarget.getAttribute('data-value')
    setValue(options[index]);
    document.querySelector('.options').classList.add('hide')
    props.setType(type)
  }

  return (
    <div className="select" onClick={showOptions}>
      <Icon className="down">expand_more</Icon>
      <div className="option" data-value={current.value}>
        <Icon>{current.icon}</Icon>
        <span>{current.value}</span>
      </div>

      <div className="options hide" >
        {options.map((option, i) => 
          <div 
            className={option.value === current.value ? "option active" : "option"} 
            data-value={option.value}
            key={i}
            data-id={i}
            onClick={hideOptions}
          >
            <Icon>{option.icon}</Icon>
            <span>{option.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectCommentType;