import React from 'react';
import './SelectCommentType.css'
import Icon from '@material-ui/core/Icon';

function SelectCommentType(props) {
  return (
    <div className="select">
      <Icon className="down">expand_more</Icon>
      <div className="option" data-value="text">
        <Icon>subject</Icon>
        <span>text</span>
      </div>
      <div className="option" data-value="checklist">
        <Icon>list</Icon>
        <span>checklist</span>
      </div>
      <div className="option" data-value="attachment">
        <Icon>attach_file</Icon>
        <span>text</span>
      </div>
    </div>
  );
}

export default SelectCommentType;