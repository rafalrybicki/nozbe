import React from 'react';
import './Task.css';
import Avatar from '../../shared/Avatar';
import CompletionToggler from '../../shared/CompletionToggler';
import TaskAttributes from './TaskAttributes';
import PriorityToggler from '../../shared/PriorityToggler';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Task(props) {
  const { 
    id,
    active,
    completion, 
    author, 
    content, 
    priority, 
    addToSelected, 
    editMode,
    pathName
  } = props

  const onTaskToggle = (e) => {
    if (editMode) {
      e.preventDefault()
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
      <Link 
        onClick={onTaskToggle}
        className="task-link"
        to={active ? pathName : pathName + '/' + id}
      >{content}</Link>
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


export default withRouter(Task);