import React from 'react';
import './TaskDetails.css';
import TaskBasic from '../Task/TaskBasic';
import TaskDetailsNavbar from './TaskDetailsNavbar';
import TaskDetailsContent from './TaskDetailsContent';

function TaskDetails(props) {
  return (
    <div className="task-details">
      <TaskBasic {...props} viewMode={true}/>
      <TaskDetailsContent />
      <TaskDetailsNavbar />
    </div>
  );
}

export default TaskDetails;