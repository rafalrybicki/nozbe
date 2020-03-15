import React from 'react';
import './TaskDetailsContent.css';
import TaskDetailsAttributes from './TaskDetailsAttributes';
import NewComment from './NewComment';
import Comments from './Comments';
import TaskDetailsFooter from './TaskDetailsFooter';

function TaskDetailsContent({comments, author, date}) {
  return (
    <div className="task-details-content">
      <TaskDetailsAttributes />
      <NewComment />
      <Comments comments={comments} />
      <TaskDetailsFooter author={author} date={date} />
    </div>
  );
}

export default TaskDetailsContent;