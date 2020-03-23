import React from 'react';
import './Task.css';
import Avatar from '../../shared/Avatar';
import CompletionToggler from '../../shared/CompletionToggler';
import TaskAttributes from './TaskAttributes';
import PriorityToggler from '../../shared/PriorityToggler';
import Icon from '@material-ui/core/Icon';

function Task(props) {
  const { 
    id,
    index,
    active,
    completion, 
    author, 
    content, 
    priority, 
    mode, 
    addToSelected, 
    setActiveTask, 
  } = props

  const toggleTask = (e) => {
    const notPermited = ['tick', 'completion-toggler', 'priority', 'project-link', 'material-icons MuiIcon-root priority']; // creates array each time???

    const wrongTarget = notPermited.find(el => el === e.target.classList.value);

    if (wrongTarget) {
      return
    }

    setActiveTask(index)
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
      onClick={mode === 'view' ? toggleTask : undefined}
    >
      {mode === 'edit' && 
      <>
        <input type="checkbox" onChange={addToSelected} />
        <Avatar userName={author} />
      </>}
      {mode === 'view' && <CompletionToggler completion={completion} id={id} />}
      <p>{content}</p>
      <TaskAttributes {...props} />
      <PriorityToggler
        id={id}
        priority={priority}
      />
      {mode === 'edit' && <Icon className="handler">menu</Icon>}
    </div>
  );
}


export default Task;