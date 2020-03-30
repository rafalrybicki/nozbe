import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem'
import { connect } from 'react-redux';
import { checkAll, toggleChecklistItem } from '../../../../redux/actions';
import CommentHeader from './CommentHeader'
import ChecklistForm from '../NewComment/ChecklistForm/ChecklistForm'
import CommentOptions from './CommentOptions';

function ChecklistComment({id, taskId, content, closeEditForm, author, created_at, toggleItem, checkAll }) {
  const [edit, showEditForm] = useState(false);

  if (edit) {
    return <ChecklistForm editMode={true} oldItems={content} closeEditForm={() => showEditForm(false)} />
  } else {
    const allItemsCompleted = content.every(item => item.completion === true);
    const completed = content.filter(item => item.completion === true).length;
    const allItems = content.length;

    return (
      <div className="comment checklist-comment">
        <CommentHeader 
          author={author}
          created_at={created_at}
        />
        <CommentOptions
          commentId={id}
          taskId={taskId}
          type={'checklist'}
          content={content}
          showEditForm={() => showEditForm(true)}
        />

        <ChecklistItem 
          completion={allItemsCompleted} 
          className="check-all"
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
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, {taskId, commentIndex}) {
  return {
    toggleItem: (itemIndex) => dispatch(toggleChecklistItem(taskId, commentIndex, itemIndex)),
    checkAll: (bool) => dispatch(checkAll(taskId, commentIndex, bool))
  }
}

export default connect(null, mapDispatchToProps)(ChecklistComment);