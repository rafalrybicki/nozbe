import React from 'react';
import './TaskDetails.css';
import TaskBasic from '../Task/TaskBasic';
import TaskDetailsNavbar from './TaskDetailsNavbar';

function TaskDetails({}) {
  return (
    <div className="task-details">
      <TaskBasic {...task} viewMode={true}/>
      <div className="task-details-inner">
        sdfsdfsdf
        sdfsdfsdfsd
        sdfsdf
      </div>
      <TaskDetailsNavbar />
    </div>
  );
}

const task = {
  id: 2,
  content: 'content2',
  completion: true,
  priority: false,
  time: '5 min',
  project: {
    name: 'Inbox',
    path: '/inbox'
  },
  categories: [
    {
      name: 'Home',
      icon: 'home'
    }
  ],
  date: new Date(),
  repeat: false,
  comments: [],
  holder: 'John Doe',
  created_at: new Date(),
  updated_at: new Date()
}

export default TaskDetails;