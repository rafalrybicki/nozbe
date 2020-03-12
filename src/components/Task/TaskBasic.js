import React from 'react';
import TaskAttributes from './TaskAttributes'
import './TaskBasic.css'

import Icon from '@material-ui/core/Icon';

function TaskBasic(props) {
  const { completion, viewMode, priority, toggleCompletion, togglePriority } = props

  return (
    <div className="task-basic">
      {viewMode &&
        <span
          className="circle"        
          onClick={toggleCompletion}
        >
        {completion && <span>&#10003;</span>}
        </span>
      }
      <div className="content">
        <span className="desc">{props.content}</span>
        <TaskAttributes {...props} />
      </div>
      <Icon
        style={styles.color}
        onClick={viewMode ? togglePriority : undefined}
        className="priority"
      >
        {priority ? 'star' : 'star_outlined'}
      </Icon>
    </div>
  );
}

const styles = {
  color: {
    color: '#28ce63', //project's color for project insted for priority
  }
}

export default TaskBasic;