import React from 'react';
import { NavLink } from "react-router-dom";
import Icon from '@material-ui/core/Icon';

function MenuItem({icon, path}) {
  return (
    <div>
      <NavLink to={path} >
        <Icon>{icon}}</Icon>
        {path.charAt(0).toUpperCase() + path.slice(1)}
      </NavLink>
    </div>
  );
}

export default MenuItem