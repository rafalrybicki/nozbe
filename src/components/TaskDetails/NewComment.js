import React from 'react';
import './NewComment.css'
import SelectCommentType from './SelectCommentType'
import Icon from '@material-ui/core/Icon';

function NewComment(props) {
  return (
    <div className="new-comment">
      <Icon className="close">close</Icon>
      <SelectCommentType />
      <button>Save</button>
      <textarea placeholder="Add comment (ENTER)" />

    </div>
  );
}

export default NewComment;