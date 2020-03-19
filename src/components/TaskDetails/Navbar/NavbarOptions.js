import React from 'react';
import './NavbarOptions.css';
import Icon from '@material-ui/core/Icon';


function NavbarOptions(props) {

  return (
    <div>
      <Icon>more_horiz</Icon>
      <div className="option-list">
        <div className="option-list-item">
          <Icon>link</Icon>
          <span>Copy task ref link</span>
        </div>
        <div className="option-list-item">
          <Icon>library_add</Icon>
          <span>Clone</span>
        </div>
        <div className="option-list-item">
          <Icon>assignment</Icon>
          <span>Convert to project</span>
        </div>
        <div className="option-list-item">
          <Icon>exit_to_app</Icon>
          <span>Show in project</span>
        </div>
        <div className="option-list-item">
          <Icon>delete</Icon>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default NavbarOptions;