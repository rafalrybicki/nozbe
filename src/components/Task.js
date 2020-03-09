import React, { useState } from 'react'
import './Task.css'
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom'
import moment from 'moment'

function Task({ completion, content, repeat, project, comments, time, date, category, priority,holder, viewMode, togglePriority, toggleCompletion, setTaskToUpdate}) {
  const [completed, setComplete] = useState(completion);
  const hover = () => {
    if (completion) return
    setComplete(!completed)
  }
  return (
    <div className={completion ? 'task completed' : 'task'}>
      {!viewMode && <input type="checkbox" onChange={setTaskToUpdate} /> }
      {!viewMode && <span className="initials">{holder[0] + holder.split(' ')[1][0]}</span>}
      {viewMode && <Icon className="completion"
                     onMouseEnter={hover}
                     onMouseLeave={hover}
                     onClick={toggleCompletion}
                   >
                     {completed ? 'check_circle_outline_outlined' : 'radio_button_unchecked'}
                   </Icon>}
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
      <Icon 
        style={styles.color}
        onClick={viewMode && togglePriority}
      >
        {priority ? 'star' : 'star_outlined'}
      </Icon> 
    </div>
  );
}

const styles = {
  color: {
    color: '#28ce63', //project's color here
  }
}

export default Task;