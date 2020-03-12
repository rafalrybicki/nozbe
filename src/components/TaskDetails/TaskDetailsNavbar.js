import React from 'react';
import './TaskDetailsNavbar.css'
import Icon from '@material-ui/core/Icon';

function TaskDetailsNavbar(props) {
  return (
    <div className="task-details-navbar">
      <Icon>arrow_forward</Icon>
      <div className="navbar-buttons">
        <Icon>keyboard_arrow_up</Icon>
        <Icon>keyboard_arrow_down</Icon>
      </div>
      <Icon>more_horiz</Icon>
    </div>
  );
}

export default TaskDetailsNavbar;