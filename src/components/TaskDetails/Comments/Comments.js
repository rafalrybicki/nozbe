import React from 'react';
import Comment from './Comment'

function Comments(props) {
  return (
    <div className="comments">
      {props.comments && props.comments.map(comment => <Comment {...comment} key={comment.id}/> )}
    </div>
  );
}

export default Comments;