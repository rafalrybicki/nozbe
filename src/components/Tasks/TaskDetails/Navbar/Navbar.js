import React from 'react';
import './Navbar.css'
import Icon from '@material-ui/core/Icon';
import NavbarOptions from './NavbarOptions';

function Navbar({ index, id, changeTask, lastTask, closeDetails }) {

  return (
    <div className="task-details-navbar">
      <Icon 
        onClick={closeDetails}
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
      <NavbarOptions id={id} closeDetails={closeDetails}/>
    </div>
  );
}

export default Navbar;