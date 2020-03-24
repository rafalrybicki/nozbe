import React from 'react';
import Comment from './Comment/Comment'
import { connect } from 'react-redux'

function Comments({comments}) {
  
  return (
    <div className="comments">
      {comments.map(comment => <Comment {...comment} key={comment.id}/> )}
    </div>
  );
}

function mapStateToProps(state) {
  const id = window.location.pathname.split('/')[2];
  return {
    comments: state.taskComments[id]
  }
}

export default connect(mapStateToProps)(Comments);