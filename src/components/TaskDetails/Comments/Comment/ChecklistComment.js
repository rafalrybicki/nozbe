import React from 'react';
import './ChecklistComment.css'
import Toggler from '../../../shared/Toggler'

function ChecklistComment({content}) {
  return (
    <>
      {content.map((item, index) => 
        <div
          className={item.completion ? "checklist-comment-item completed" : "checklist-comment-item"}
          key={index}
        >
          <Toggler
            completion={item.completion}
            // onclick={() => toggleCompletion(index)}
          />
          <p>{item.value}</p>
        </div> 
      )}
    </>
  );
}

export default ChecklistComment;