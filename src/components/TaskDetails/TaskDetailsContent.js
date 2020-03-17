import React from 'react';
import './TaskDetailsContent.css';
import TaskDetailsAttributes from './TaskDetailsAttributes';
import NewComment from './NewComment';
import Comments from './Comments';
import TaskDetailsFooter from './TaskDetailsFooter';

function TaskDetailsContent({project, deadline, completion, categories, repeat, duration, comments, author, created_at}) {
  return (
    <div className="task-details-content">
      <TaskDetailsAttributes 
        project={project} 
        deadline={deadline} 
        categories={categories} 
        repeat={repeat} 
        duration={duration} 
        completion={completion}
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