import React from 'react';
import './Navbar.css'
import Icon from '@material-ui/core/Icon';

function Navbar(props) {
  const hideDetails = () => {
    document.querySelector('.tasks').classList.remove('show-details')
  }
  return (
    <div className="task-details-navbar">
      <Icon onClick={hideDetails}>arrow_forward</Icon>
      <div className="navbar-buttons">
        <Icon>keyboard_arrow_up</Icon>
        <Icon>keyboard_arrow_down</Icon>
      </div>
      <Icon>more_horiz</Icon>
    </div>
  );
}

export default Navbar;