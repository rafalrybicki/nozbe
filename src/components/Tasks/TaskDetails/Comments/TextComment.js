import React, { useState } from 'react';
import CommentHeader from './CommentHeader';
import CommentOptions from './CommentOptions';
import EditForm from '../../../shared/EditForm';
import { connect } from 'react-redux';
import { editComment } from '../../../../redux/actions';

function TextComment({author, created_at, content, id, taskId, index, dispatch}) {
   const [edit, showEditForm] = useState(false);

   return (
      <div className="comment text-comment">
         <CommentHeader 
            author={author}
            created_at={created_at}
         />
         
         {edit === false && <p>{content}</p>}

         {edit === false &&
         <CommentOptions
            commentId={id}
            taskId={taskId}
            type={'checklist'}
            content={content}
            showEditForm={() => showEditForm(true)}
         />}

         {edit && 
         <EditForm 
            prevContent={content} 
            closeForm={() => showEditForm(false)}
            onSave={(newContent) => dispatch(editComment(taskId, index, newContent.content))}
         />}
      </div>
   );
}

export default connect()(TextComment);