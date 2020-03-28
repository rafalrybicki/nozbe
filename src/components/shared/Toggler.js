import React from 'react';
import './Toggler.css'

function Toggler({id, onClick, className}) {
  return (
    <span 
      className={"toggler " + className}
      onClick={() => onClick(id)}
    >&#10003;</span>
  );
}

export default Toggler;