import React from 'react';
import Comment from './Comment/Comment';

function Comments({comments}) {
  
  return (
    <div className="comments">
      {comments.map(comment => <Comment {...comment} key={comment.id}/> )}
    </div>
  );
}

export default Comments;