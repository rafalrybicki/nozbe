import React from 'react';
import TaskAttributes from './TaskAttributes'
import './TaskBasic.css'
import PriorityIcon from '../shared/PriorityIcon'

function TaskBasic(props) {
  const { completion, viewMode, priority, toggleCompletion, togglePriority } = props
  return (
    <div className="task-basic">
      {viewMode &&
        <span
          className="circle"        
          onClick={toggleCompletion}
        >
        {completion && <span className="thick">&#10003;</span>}
        </span>
      }
      <div className="content">
        <span className="desc">{props.content}</span>
        <TaskAttributes {...props} />
      </div>
      <PriorityIcon 
        onClick={viewMode ? togglePriority : undefined}
        priority={priority}
      />
    </div>
  );
}

export default TaskBasic;