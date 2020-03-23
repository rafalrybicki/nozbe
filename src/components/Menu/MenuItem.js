import React from 'react';
import { NavLink } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import './MenuItem.css'

function MenuItem({icon, path, quantity}) {
  return (
    <React.Fragment>
      <NavLink to={path} className="menu-item">
        <Icon>{icon}</Icon>
        {path.charAt(0).toUpperCase() + path.slice(1)}
        {quantity > 0 && <span className="quantity">{quantity}</span>}
      </NavLink>
    </React.Fragment>
  );
}

export default MenuItem