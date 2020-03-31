import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem'
import { connect } from 'react-redux';
import { checkAll, toggleChecklistItem, editComment } from '../../../../redux/actions';
import CommentHeader from './CommentHeader'
import ChecklistForm from '../NewComment/ChecklistForm/ChecklistForm'
import CommentOptions from './CommentOptions';

function ChecklistComment({id, taskId, index, content, author, created_at, toggleItem, checkAll, editComment }) {
  const [edit, showEditForm] = useState(false);

  const allItemsCompleted = content.every(item => item.completion === true);
  const completed = content.filter(item => item.completion === true).length;
  const allItems = content.length;

  return (
    <div className="comment checklist-comment">
      <CommentHeader 
        author={author}
        created_at={created_at}
      />

      {edit === false &&
      <>
        <CommentOptions
          commentId={id}
          taskId={taskId}
          type={'checklist'}
          content={content}
          showEditForm={() => showEditForm(true)}
        />
        <ChecklistItem 
          completion={allItemsCompleted} 
          onClick={() => checkAll(!allItemsCompleted)}
          value={allItemsCompleted ? 'Uncheck all' : 'Check all'}
        > 
          <span className="stats">
            {completed}/{allItems} {Math.floor(completed/allItems * 100)}%
          </span>
        </ChecklistItem>

        {content.map((item, index) => 
          <ChecklistItem 
            {...item} 
            onClick={toggleItem}
            key={index}
            itemIndex={index} 
          />
        )}
      </>}

      {edit && 
      <>
        <ChecklistForm 
          editComment={editComment}
          closeForm={() => showEditForm(false)}
          editMode={true} 
          oldItems={content.map(item => ({...item}) )} 
        />
        <button 
          className="cancel" 
          onClick={() => showEditForm(false)}
        >Cancel</button>
      </>
      }
    </div>
  )
}

function mapDispatchToProps(dispatch, {taskId, index}) {
  return {
    toggleItem: (itemIndex) => dispatch(toggleChecklistItem(taskId, index, itemIndex)),
    checkAll: (bool) => dispatch(checkAll(taskId, index, bool)),
    editComment: (newContent) => dispatch(editComment(taskId, index, newContent))
  }
}

export default connect(null, mapDispatchToProps)(ChecklistComment);