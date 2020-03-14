import React, { useState } from 'react';
import './NewComment.css'
import CommentTypePicker from './CommentTypePicker'
import Icon from '@material-ui/core/Icon';

function NewComment(props) {
  const [type, setType] = useState('Text')
  return (
    <div className="new-comment">
      <Icon className="close">close</Icon>
      <CommentTypePicker setType={(type) => setType(type)} type={type} />
      <button>Save</button>
      <textarea placeholder="Add comment (ENTER)" />
      type = {type}
      <Icon className="new-comment-checklist">format_list_bulleted</Icon>
    </div>
  );
}

export default NewComment;