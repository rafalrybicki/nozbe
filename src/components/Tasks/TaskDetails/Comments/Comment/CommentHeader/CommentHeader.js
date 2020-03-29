import React from 'react';
import './CommentHeader.css';
import Avatar from '../../../../../shared/Avatar';
import CommentOptions from './CommentOptions';
import moment from 'moment';

function CommentHeader({author, created_at, taskId, commentId}) {
   return (
      <div className="comment-header">
         <Avatar userName={author} />
         <span className="author">{author}</span>
         <span className="date">{moment(created_at).startOf('second').fromNow()}</span>
         <CommentOptions 
            taskId={taskId}
            commentId={commentId}
         />
      </div>
   );
}

export default CommentHeader;