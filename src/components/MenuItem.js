import React from 'react';
import { NavLink } from "react-router-dom";

function MenuItem({icon, path}) {
  return (
    <div>
      <NavLink to={path} >
        {path.charAt(0).toUpperCase() + path.slice(1)}
      </NavLink>
    </div>
  );
}

export default MenuItem