import React from 'react';
import './TaskDetailsContent.css'
import TaskDetailsAttributes from './TaskDetailsAttributes'
import NewComment from './NewComment'
import Comments from './Comments'

function TaskDetailsContent(props) {
  return (
    <div className="task-details-content">
      <TaskDetailsAttributes />
      <NewComment />
      <Comments comments={props.comments} />
    </div>
  );
}

export default TaskDetailsContent;