import React from 'react';
import './Comment.css'
import CommentHeader from './CommentHeader/CommentHeader'
import ChecklistComment from './ChecklistComment';

function Comment({id, index, taskId, type, content, author, project, created_at, dispatch}) {
  let commentBody;
  if (type === 'text') {
    commentBody = content;
  } else if (type === 'checklist') {
    commentBody = <ChecklistComment content={content} taskId={taskId} commentIndex={index} />
  } else {
    //type attachment
  }

  return (
    <div className="comment">
      <CommentHeader 
        author={author}
        created_at={created_at}
        taskId={taskId}
        commentId={id}
        type={type}
        content={content} 
        project={project}
      />
      <div className="comment-body">
        {commentBody}
      </div>
      
    </div>
  );
}

export default Comment;