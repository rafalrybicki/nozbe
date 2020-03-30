import React, { useState} from 'react';
import './Comment.css'
import CommentHeader from './CommentHeader/CommentHeader'
import ChecklistComment from './ChecklistComment';

function Comment({id, index, taskId, type, content, author, project, created_at }) {
  const [editForm, showEditForm] = useState(false)

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
        showEditForm={() => showEditForm(true)}
      />
      <div className="comment-body">
        {type === 'checklist' &&
          <ChecklistComment edit={editForm} closeEditForm={() => showEditForm(false)} content={content} taskId={taskId} commentIndex={index} />
        }

        {type === 'text' && content}
      </div>
      
    </div>
  );
}

export default Comment;