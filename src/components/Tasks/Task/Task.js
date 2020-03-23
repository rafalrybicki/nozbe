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
    activeTask,
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

    if (activeTask === false) {
      document.addEventListener('click', hideTaskDetails)
    }

    setActiveTask(index)
  }

  const hideTaskDetails = (e) => {
    const path = [...e.path].reverse().slice(5)
    const keepDetails = path.find(el => el.classList.contains('task') || el.classList.contains('task-details'));

    if (e.target.textContent === 'arrow_forward') { 
      document.removeEventListener('click', hideTaskDetails)
    }

    if (keepDetails) {
      return
    } 

    setActiveTask(null)
    document.removeEventListener('click', hideTaskDetails)
  }

  //const activeColor = project.color !== 'black' ? project.color : '#DADADA'

  let className = "task";
  
  if (completion) {
    className += " completed"
  } 

  if (activeTask) {
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