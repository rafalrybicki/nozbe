import React from 'react';
import './TaskDetailsContent.css';
import TaskDetailsAttributes from './TaskDetailsAttributes';
import NewComment from './NewComment';
import Comments from './Comments';
import TaskDetailsFooter from './TaskDetailsFooter';

function TaskDetailsContent({project, deadline, categories, repeat, time, comments, author, created_at}) {
  return (
    <div className="task-details-content">
      <TaskDetailsAttributes 
        project={project} 
        deadline={deadline} 
        categories={categories} 
        repeat={repeat} 
        time={time} 
      />
      <NewComment />
      <Comments 
        comments={comments} 
      />
      <TaskDetailsFooter 
        author={author}
        date={created_at} 
      />
    </div>
  );
}

export default TaskDetailsContent;