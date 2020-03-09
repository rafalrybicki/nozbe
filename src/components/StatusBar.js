import React from 'react';
import './StatusBar.css'
import Icon from '@material-ui/core/Icon';

function StatusBar({done, left}) {
  const toggleNewTask = () => {
    document.addEventListener('click', hideNewTask)
    document.querySelector('.new-task').classList.add('show')
  }
  const hideNewTask = (e) => {
    const index = e.path.findIndex((obj) => obj.className === "new-task show")
    if(index < 0) {
      document.removeEventListener('click', hideNewTask);
      document.querySelector('.new-task').classList.remove('show')
    }
  }
  return (
    <div className="status-bar">
      <Icon>more_horiz</Icon>
      {`${done} done  :  ${left} left`}
      <Icon onClick={toggleNewTask}>add</Icon>
    </div>
  );
}

export default StatusBar;