import React from 'react';
import Comment from './Comment/Comment';
import { connect } from 'react-redux';

function Comments({taskId, comments}) {
  return (
    <div className="comments">
      {comments.map((comment,i) => 
        <Comment 
          {...comment} 
          key={comment.id}
          taskId={taskId}
          index={i}
        /> 
      )}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments[ownProps.taskId]
  }
}

export default connect(mapStateToProps)(Comments);