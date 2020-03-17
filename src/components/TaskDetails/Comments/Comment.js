import React from 'react';
import './Comment.css'
import Icon from '@material-ui/core/Icon';
import Avatar from '../../shared/Avatar';

function Comment({type, content, author, created_at}) {
  return (
    <div className="comment">
      <div className="comment-header">
        <Avatar userName={author} />
        <span className="author">{author}</span>
        <span className="date">{created_at.toDateString()}</span>
        <Icon>more_horiz</Icon>{/*dismissible popover  */}
      </div>
      <div className="comment-body">
        {content}
      </div>
      
    </div>
  );
}

export default Comment;