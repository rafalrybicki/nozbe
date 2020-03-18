import React from 'react';
import './Comment.css'
import Icon from '@material-ui/core/Icon';
import Avatar from '../../shared/Avatar';
import ChecklistComment from './ChecklistComment';

function Comment({id, type, content, author, created_at}) {
  let commentBody;
  if (type === 'text') {
    commentBody = content;
  } else if (type === 'checklist') {
    commentBody = <ChecklistComment content={content} />
  } else {
    //attachment
  }
  return (
    <div className="comment">
      <div className="comment-header">
        <Avatar userName={author} />
        <span className="author">{author}</span>
        <span className="date">{created_at.toDateString()}</span>
        <Icon>more_horiz</Icon>{/*dismissible popover  */}
      </div>
      <div className="comment-body">
        {commentBody}
      </div>
      
    </div>
  );
}

export default Comment;