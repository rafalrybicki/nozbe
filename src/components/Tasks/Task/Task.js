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
    active,
    completion, 
    author, 
    content, 
    priority, 
    addToSelected, 
    editMode
  } = props

  const toggleTask = (e) => {
    if (active) {
      props.history.push('/priority')
    } else {
      props.history.push('/priority/' + id)
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
      className={editMode ? "task edit-mode" : className} 
    >
      <input 
        type="checkbox" 
        onChange={addToSelected} 
      />
      <Avatar userName={author} />
      <CompletionToggler 
        completion={completion} 
        id={id} 
      />
      <p onClick={editMode === false ? toggleTask : undefined }
      >{content}</p>
      <TaskAttributes {...props} />
      <PriorityToggler
        id={id}
        priority={priority}
      />
      <Icon 
        className={editMode ? "handler" : "handler hide"}
      >menu</Icon>
    </div>
  );
}


export default Task;