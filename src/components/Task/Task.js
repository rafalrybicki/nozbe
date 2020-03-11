import React from 'react';
import './Task.css';

import TaskBasic from './TaskBasic'

import Icon from '@material-ui/core/Icon';

function Task(props) {
  const { completion, holder, viewMode, addToSelected } = props

  const editTask = (e) => {
    if (e.target.classList.contains('completion') || e.target.classList.contains('priority') || e.target.tagName === 'A') {
      return
    } else {
      // showDetails(!details)
    }
  }
  return (
    <div className={completion ? 'task completed' : 'task'} onClick={editTask}>
      {!viewMode && <input type="checkbox" onChange={addToSelected} /> }
      {!viewMode && <span className="circle">{holder[0] + holder.split(' ')[1][0]}</span>}
      <TaskBasic {...props} />
      {!viewMode && <Icon className="handler">menu</Icon>}
    </div>
  );
}


export default Task;