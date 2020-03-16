import React from 'react';
import TaskAttributes from './TaskAttributes'
import './TaskBasic.css'
import Priority from '../shared/Priority'
import Completion from '../shared/Completion'

function TaskBasic(props) {
  const { completion, viewMode, priority, toggleCompletion, togglePriority } = props
  return (
    <div className="task-basic">
      <Completion completion={completion} onclick={toggleCompletion} />
      <div className="content">
        <span className="desc">{props.content}</span>
        <TaskAttributes {...props} />
      </div>
      <Priority 
        onClick={viewMode ? togglePriority : undefined}
        priority={priority}
      />
    </div>
  );
}

export default TaskBasic;