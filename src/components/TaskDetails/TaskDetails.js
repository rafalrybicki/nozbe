import React from 'react';
import './TaskDetails.css';
import Header from './Header/Header'
import TaskDetailsNavbar from './TaskDetailsNavbar';
import TaskDetailsContent from './TaskDetailsContent';

function TaskDetails(props) {
  return (
    <div className="task-details">
      {/* <TaskBasic {...props} viewMode={true}/> task basic header with priority icon0-= */}
      <Header content={props.content} />
      <TaskDetailsContent {...props} />
      <TaskDetailsNavbar />
    </div>
  );
}

export default TaskDetails;