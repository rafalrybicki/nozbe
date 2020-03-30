import React from 'react';
import './Comments.css'
import ChecklistComment from './ChecklistComment';
import { connect } from 'react-redux';

function Comments({taskId, comments}) {
return (
   <div className="comments">
      {comments.map((comment, index) => {
         if (comment.type === 'text') {
            return (
               <p key={comment.id}>{comment.content}</p>
            )
         } else if (comment.type === 'checklist') {
            return(
               <ChecklistComment 
                  {...comment} 
                  taskId={taskId}
                  commentIndex={index}
                  key={comment.id}
               />
            )
         } 
      })}


   </div>
)
}

function mapStateToProps(state, ownProps) {
   return {
      comments: state.comments[ownProps.taskId]
   }
}

export default connect(mapStateToProps)(Comments);