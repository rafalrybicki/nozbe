import React from 'react';
import TaskAttributes from './TaskAttributes'
import './TaskBasic.css'
import Priority from '../shared/Priority'
import Completion from '../shared/Completion'

function TaskBasic(props) {
  const { completion, viewMode, priority, toggleCompletion, togglePriority } = props
  return (
    <div className="task-basic">
      
      <p>{props.content}</p>
      <TaskAttributes {...props} />
      
    </div>
  );
}

export default TaskBasic;