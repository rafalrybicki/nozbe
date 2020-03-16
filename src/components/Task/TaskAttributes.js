import React from 'react';
import './TaskAttributes.css'
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

function TaskAttributes({ project, comments, repeat, time, deadline, categories, duration, completion}) {
  const delayed = new Date() > deadline && completion === false ? 'danger' : '';
  
  return (
    <div className="task-attributes">
      {window.location.pathname === '/priority' && 
      <Link to={project.path}>
        <Icon 
          style={{'color': project.name === 'Inbox' ? '' : project.color }}
        >fiber_manual_record</Icon>
        <span className="text">{project.name}</span>
      </Link>}
      
      {comments.length > 0 && 
      <>
        <Icon className="comments-icon">sms</Icon>
        <span className="text">{comments.length}</span>
      </>}

      {repeat && <Icon className="repeat">replay</Icon>}

      {duration && <>
        <Icon>schedule</Icon>
      <span className="text">{duration}</span>
      </>}

      {time && 
      <>
        <Icon>schedule</Icon>
        <span className="text">{time}</span>
      </>}

      {deadline && 
      <>
        <Icon className={delayed}>today</Icon>
        <span className={delayed + " text"}>{moment(deadline).calendar()}</span>
      </>}

      {categories.length > 0 &&
      <>
        {categories.map((category, i) => 
          <Icon 
            key={i} 
            className="category"
          >
            {category.icon}
          </Icon>)}  
      </>}
    </div>
  );
}

export default TaskAttributes;