import React from 'react';
import './Task.css';
import Avatar from '../../shared/Avatar';
import Toggler from '../../shared/Toggler';
import TaskAttributes from './TaskAttributes';
import Priority from '../../shared/Priority';
import Icon from '@material-ui/core/Icon';

function Task(props) {
  const { 
    active,
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
    if (mode === 'edit') {
      return
    }
    if (e.target.classList.contains('tick') || e.target.classList.contains('toggler')|| e.target.classList.contains('priority') || e.target.tagName === 'A') {
      return
    } else {
      const activeTask = document.querySelector('.task.active')

      if (activeTask === e.currentTarget) {
        activeTask.classList.remove('active')
      } else if (activeTask) {
        activeTask.classList.remove('active')
        e.currentTarget.classList.add('active')
      } else {
        e.currentTarget.classList.add('active')
      }
      
      toggleDetails()
    }
  }
  //const activeColor = project.color !== 'black' ? project.color : '#DADADA'

  let className = "task";
  
  if (completion) {
    className += " completed"
  } 

  if (active) {
    className += " active"
  }

  return (
    <div 
      className={className} 
      onClick={showDetails}
    >
      {mode === 'edit' && 
      <>
        <input type="checkbox" onChange={addToSelected} />
        <Avatar userName={author} />
      </>}
      <Toggler completion={completion} onclick={toggleCompletion} />
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