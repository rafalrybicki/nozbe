import React, { useState } from 'react'
import { connect } from 'react-redux'
import './NewTask.css'
import Icon from '@material-ui/core/Icon';
import { addTask, createTaskCommentsKey } from '../../redux/actions';

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

  const addNewTask = (e) => {
    e.preventDefault();
    if(input.value.trim() === '') return;
    const id = Math.random();

    dispatch(addTask(id, input.value.trim(), project));
    dispatch(createTaskCommentsKey(id))

    input.value = '';
  }

  return (
    <div className='new-task'>
      <Icon>close</Icon>
      <Icon 
        className={"direction-" + (direction ? 'up' : 'down')}
        onClick={toogleDirection}
      >redo</Icon>
      <form onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="Enter task name"
          ref={node => { input = node }}
        />
        <button type="submit">
          <Icon>add</Icon>
        </button>
      </form>
    </div>
  );
}

NewTask = connect()(NewTask)

export default NewTask;