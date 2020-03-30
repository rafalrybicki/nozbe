import React from 'react';
import './ChecklistComment.css';
import ChecklistItem from './ChecklistItem'
import { connect } from 'react-redux';
import { checkAll, toggleChecklistItem } from '../../../../../redux/actions';

import ChecklistForm from '../../NewComment/ChecklistForm/ChecklistForm'

function ChecklistComment({content, taskId, commentIndex, closeEditForm, edit, dispatch}) {

  if (edit) {
    return <ChecklistForm editMode={true} oldItems={content} closeEditForm={closeEditForm} />
  } else {
    const isAllCompleted = content.every(item => item.completion === true);
    const completed = content.filter(item => item.completion === true).length;
    const allItems = content.length;

    const toggleItem = (itemIndex) => {
      dispatch(toggleChecklistItem(taskId, commentIndex, itemIndex))
    }

    return (
      <>
        <ChecklistItem 
          completion={isAllCompleted} 
          className="check-all"
          onClick={() => dispatch(checkAll(taskId, commentIndex, !isAllCompleted))}
        > 
          <p>{isAllCompleted ? 'Uncheck all' : 'Check all'}</p>
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
      </>
    )
  }
}

export default connect()(ChecklistComment);