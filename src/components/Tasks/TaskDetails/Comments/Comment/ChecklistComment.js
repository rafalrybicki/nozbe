import React from 'react';
import './ChecklistComment.css'
import Toggler from '../../../../shared/Toggler'

function ChecklistComment({content}) {
  return (
    <>
      <div className={"checklist-comment-item check-all"}>
        <Toggler
          className={"checklist-toggler"}
          completion={false}
        />
        <p>Check all</p>
        <span className="stats">0/2 (0%)</span>
      </div> 
      {content.map((item, index) => 
        <div
          className={item.completion ? "checklist-comment-item completed" : "checklist-comment-item"}
          key={index}
        >
          <Toggler
            className={"checklist-toggler"}
            completion={item.completion}
          />
          <p>{item.value}</p>
        </div> 
      )}
    </>
  );
}

export default ChecklistComment;