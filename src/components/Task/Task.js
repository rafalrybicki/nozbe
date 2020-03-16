import React from 'react';
import './Task.css';
import Avatar from '../Avatar';
import Completion from '../shared/Completion';
import TaskAttributes from './TaskAttributes';
import Priority from '../shared/Priority';
import Icon from '@material-ui/core/Icon';

function Task(props) {
  const { 
    completion, 
    author, 
    content, 
    priority, 
    mode, 
    addToSelected, 
    toggleDetails, 
    toggleCompletion, 
    togglePriority 
  } = props

  const showDetails = (e) => {
    if (e.target.classList.contains('tick') || e.target.classList.contains('completion')|| e.target.classList.contains('priority') || e.target.tagName === 'A') {
      return
    } else if (mode === 'view') {
      toggleDetails()
    }
  }
  //const activeColor = project.color !== 'black' ? project.color : '#DADADA'

  return (
    <div 
      className={completion ? 'task completed' : 'task'} 
      onClick={showDetails}
    >
      {mode === 'edit' && <>
        <input type="checkbox" onChange={addToSelected} />
        <Avatar userName={author} />
      </>}
      <Completion completion={completion} onclick={toggleCompletion} />
      <p>{content}</p>
      <TaskAttributes {...props} />
      <Priority
        onClick={mode === 'view' ? togglePriority : undefined}
        priority={priority}
      />
      {mode === 'edit' && <Icon className="handler">menu</Icon>}
    </div>
  );
}


export default Task;