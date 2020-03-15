import React from 'react';
import './TaskAttributes.css'

import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

function TaskAttributes({ project, comments, repeat, time, deadline, categories, completion}) {
  return (
    <div className="task-attributes">
      {window.location.pathname === '/priority' && 
        <Link to={project.path}>
          <span>&bull;</span>
          {project.name}
        </Link>
      }
      {comments.length > 0 && 
        <div>
          <Icon>sms</Icon>
          {comments.length}
        </div>}
      {repeat && 
        <div>
          <Icon className="repeat">replay</Icon>  
        </div>}
      {time && 
        <div>
          <Icon>schedule</Icon>
          {time}
        </div>}
      {deadline && 
        <div className={deadline < Date.now() && completion === false ? 'danger' : ''}>
        <Icon>today</Icon>
          {moment(deadline).calendar()}
        </div>}
      {categories.length > 0 &&
      <div>
        {categories.map((category, i) => (<Icon key={i} className="category">{category.icon}</Icon>))}  
      </div>}
    </div>
  );
}

export default TaskAttributes;