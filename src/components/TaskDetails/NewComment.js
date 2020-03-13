import React, { useState } from 'react';
import './NewComment.css'
import SelectCommentType from './SelectCommentType'
import Icon from '@material-ui/core/Icon';

function NewComment(props) {
  const [type, setType] = useState('Text')
  return (
    <div className="new-comment">
      <Icon className="close">close</Icon>
      <SelectCommentType setType={(type) => setType(type)}/>
      <button>Save</button>
      <textarea placeholder="Add comment (ENTER)" />
      type = {type}
    </div>
  );
}

export default NewComment;