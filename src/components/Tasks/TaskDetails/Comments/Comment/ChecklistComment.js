import React, { useEffect } from 'react';
import './ChecklistComment.css';
import ChecklistItem from './ChecklistItem'
import { connect } from 'react-redux';
import { checkAll, toggleChecklistItem } from '../../../../../redux/actions'

function ChecklistComment({content, taskId, commentIndex, dispatch}) {
  const isAllCompleted = content.every(item => item.completion === true);
  const completed = content.filter(item => item.completion === true).length;
  const allItems = content.length;

  const toggleItem = (itemIndex) => {
    dispatch(toggleChecklistItem(taskId, commentIndex, itemIndex))
  }

  useEffect(() => {})

  return (
    <>
      <ChecklistItem 
        completion={isAllCompleted} 
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

export default connect()(ChecklistComment);