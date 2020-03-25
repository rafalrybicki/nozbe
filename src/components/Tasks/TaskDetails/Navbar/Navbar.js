import React from 'react';
import './Navbar.css'
import Icon from '@material-ui/core/Icon';
import NavbarOptions from './NavbarOptions';
import { Link } from 'react-router-dom';

function Navbar({id, nextTaskId, prevTaskId, pathName}) {
  const nextTaskPath = pathName + '/' + (nextTaskId ? nextTaskId : id);
  const prevTaskPath = pathName + '/' + (prevTaskId ? prevTaskId : id);

  return (
    <div className="task-details-navbar">
      <Link to={pathName}>
        <Icon>arrow_forward</Icon>
      </Link>
      <Link 
        to={prevTaskPath}
        className={prevTaskId ? "prev" : "prev disabled"}
      >
        <Icon>keyboard_arrow_up</Icon>
      </Link>
      <Link 
        to={nextTaskPath}
        className={nextTaskId ? "next" : "next disabled"}
      >
        <Icon>keyboard_arrow_down</Icon>
      </Link>
      <NavbarOptions id={id} />
    </div>
  );
}

export default Navbar;