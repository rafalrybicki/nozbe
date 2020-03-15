import React from 'react';
import './Task.css';
import Avatar from '../Avatar'

import TaskBasic from './TaskBasic'
import Icon from '@material-ui/core/Icon';

function Task(props) {
  const { completion, holder, project, viewMode, addToSelected, toggleDetails} = props

  const showDetails = (e) => {
    if (e.target.classList.contains('circle') || e.target.classList.contains('thick')|| e.target.classList.contains('priority') || e.target.tagName === 'A') {
      return
    } else if (viewMode) {
      toggleDetails()
    }
  }

  //const activeColor = project.color !== 'black' ? project.color : '#DADADA'

  return (
    <div className={completion ? 'task completed' : 'task'} onClick={showDetails}>
      {!viewMode && <input type="checkbox" onChange={addToSelected} /> }
      {!viewMode && <Avatar userName={holder} />}
      <TaskBasic {...props} />
      {!viewMode && <Icon className="handler">menu</Icon>}
    </div>
  );
}


export default Task;