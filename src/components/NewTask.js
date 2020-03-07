import React, { useState } from 'react'
import { connect } from 'react-redux'
import './NewTask.css'
import Icon from '@material-ui/core/Icon';
import { addTask } from '../redux/actions';

let NewTask = ({dispatch, project}) => {
  let input
  const [direction, setDirection] = useState(false);
  const toogleDirection = () => {
    if (direction) {
      setDirection(false)
    } else {
      setDirection(true)
    }
  }
  const addNewTask = () => {
    if(input.value.trim() === '') return

    dispatch(addTask(input.value.trim(), project))
    input.value = ''
  }
  return (
    <div className='new-task'>
      <Icon>close</Icon>
      <Icon 
        className={"direction-" + (direction ? 'up' : 'down')}
        onClick={toogleDirection}
      >redo</Icon>
      <input 
        type="text" 
        placeholder="Enter task name" 
        ref={node => {input = node}}
      />
      <Icon 
        onClick={addNewTask}
      >add</Icon>
    </div>
  );
}

NewTask = connect()(NewTask)

export default NewTask;