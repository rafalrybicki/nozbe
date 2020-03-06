import React from 'react';
import './Task.css'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom'
import moment from 'moment'

function Task({content, completed, repeat, project, comments, time, date, category, priority}) {
 
  return (
    <div className="task">
      <Icon className="completed">{completed ? 'check_circle_outline_outlined' : 'radio_button_unchecked'}</Icon>
      <div>
        <span>{content}</span>
        <div className="attributes">
          <Link to='/inbox'>
            <Icon className="circle">fiber_manual_record</Icon>
            project.name
        </Link>
          {comments.length > 0 && <Icon>sms</Icon>}
          {comments.length > 0 && comments.length}
          {repeat && <Icon>replay</Icon>}
          {time && <Icon>schedule</Icon>}
          {time}
          {date && <Icon>today</Icon>}
          {date && moment(date).format("MMM Do")} 
        change catergories to arr
        </div>
      </div>
      <Icon style={styles.color}>{priority ? 'star' : 'star_outlined'}</Icon> 
    </div>
  );
}

const styles = {
  color: {
    color: 'blue', //project's color here
  }
}

export default Task;