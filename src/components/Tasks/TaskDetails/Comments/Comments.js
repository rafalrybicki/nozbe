import React from 'react';
import './Comments.css'
import ChecklistComment from './ChecklistComment';
import { connect } from 'react-redux';
import TextComment from './TextComment';

function Comments({taskId, comments}) {
   return (
      <div className="comments">
         {comments.map((comment, index) => {
            if (comment.type === 'text') {
               return (
                  <TextComment
                     {...comment} 
                     taskId={taskId}
                     index={index}
                     key={index}
                  />
               )
            } else if (comment.type === 'checklist') {
               return(
                  <ChecklistComment 
                     {...comment} 
                     taskId={taskId}
                     index={index}
                     key={index}
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