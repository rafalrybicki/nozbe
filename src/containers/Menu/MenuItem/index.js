import React from 'react';
import { Link } from "react-router-dom";

function MenuItem({icon, path}) {
  return (
    <Link to={path} />
  );
}

export default MenuItem