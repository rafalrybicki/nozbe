import React from 'react';
import './TaskDetailsFooter.css';
import Avatar from '../Avatar';
import moment from 'moment';

function TaskDetailsFooter({author, date}) {
  return (
    <div className="task-details-footer">
      <Avatar userName={author} />
      <span>
        Created by <strong>{author}</strong>
        <br />
        {moment(date).format("MMM Do YY LT")}
      </span>
    </div>
  );
}

export default TaskDetailsFooter;