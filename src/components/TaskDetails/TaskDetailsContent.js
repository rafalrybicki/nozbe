import React from 'react';
import './TaskDetailsContent.css'
import TaskDetailsAttributes from './TaskDetailsAttributes'

function TaskDetailsContent(props) {
  return (
    <div className="task-details-content">
      <TaskDetailsAttributes />
      <div className="test"></div>
    </div>
  );
}

export default TaskDetailsContent;