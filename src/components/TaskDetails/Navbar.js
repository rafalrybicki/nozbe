import React from 'react';
import './Navbar.css'
import Icon from '@material-ui/core/Icon';

function Navbar({ index, changeTask,lastTask }) {
  const hideDetails = () => {
    document.querySelector('.tasks').classList.remove('show-details')
  }
  return (
    <div className="task-details-navbar">
      <Icon 
        onClick={hideDetails}
      >arrow_forward</Icon>
      <button 
        className="prev" 
        disabled={index === 0} 
        onClick={() => changeTask(index - 1)}
      >
        <Icon>keyboard_arrow_up</Icon>
      </button>
      <button 
        className="next" 
        disabled={lastTask} 
        onClick={() => changeTask(index + 1)}
      >
        <Icon>keyboard_arrow_down</Icon>
      </button>
      <Icon>more_horiz</Icon>
    </div>
  );
}

export default Navbar;