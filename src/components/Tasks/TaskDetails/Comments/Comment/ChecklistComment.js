import React, { useEffect } from 'react';
import './ChecklistComment.css';
import Toggler from '../../../../shared/Toggler';
import { connect } from 'react-redux';
import { checkAll } from '../../../../../redux/actions'

function ChecklistComment({content, taskId, index, dispatch}) {
  const allCompleted = content.every(item => item.completion === true);
  const completed = content.filter(item => item.completion === true).length;
  const allItems = content.length;

  useEffect(() => {})

  return (
    <>
      <div className={allCompleted ? "checklist-comment-item completed" : "checklist-comment-item"}>
        <Toggler
          className={"checklist-toggler"}
          onClick={() => dispatch(checkAll(taskId, index, !allCompleted))}
        />
        <p>Check all</p>
        <span className="stats">
          {completed}/{allItems} {Math.floor(completed/allItems * 100)}%
        </span>
      </div> 
      {content.map((item, index) => 
        <div
          className={item.completion ? "checklist-comment-item completed" : "checklist-comment-item"}
          key={index}
        >
          <Toggler
            className={"checklist-toggler"}
          />
          <p>{item.value}</p>
        </div> 
      )}
    </>
  );
}

export default connect()(ChecklistComment);