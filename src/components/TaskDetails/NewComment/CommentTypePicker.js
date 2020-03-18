import React, { useState } from 'react';
import './CommentTypePicker.css'
import Icon from '@material-ui/core/Icon';

function CommentTypePicker({type, setType}) {
  const options = [
    { value: 'Text', icon: 'subject' },
    { value: 'Checklist', icon: 'format_list_bulleted' },
    { value: 'Attachment', icon: 'attach_file' },
  ];

  const [currentType, setCurrenValue] = useState(options.find(el => el.value === type));
 
  const toggleOptions = (e) => {
    const commentTypePicker = document.querySelector('.options')

    if (commentTypePicker.classList.contains('hide')) {
      commentTypePicker.classList.remove('hide');
      document.addEventListener('click', hideOptions)
    } else {
      const index = e.currentTarget.getAttribute('data-id');
      const type = e.currentTarget.getAttribute('data-value')
      setCurrenValue(options[index]);
      commentTypePicker.classList.add('hide');
      setType(type)
    }
  }

  const hideOptions = (e) => {
    if (!e.target.classList.contains('option') || !e.target.parentElement.classList.contains('option')) {
      document.querySelector('.options').classList.add('hide');
    } 
    document.removeEventListener('click', hideOptions)
  }

  return (
    <div className="comment-type-picker">
      <div className="select" >
        <div className="option" onClick={toggleOptions}>
          <Icon className="down">expand_more</Icon>
          <Icon>{currentType.icon}</Icon>
          <span>{currentType.value}</span>
        </div>

        <div className="options hide" >
          {options.map((option, i) =>
            <div
              className={option.value === currentType.value ? "option active" : "option"}
              data-value={option.value}
              key={i}
              data-id={i}
              onClick={toggleOptions}
            >
              <Icon>{option.icon}</Icon>
              <span>{option.value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentTypePicker;