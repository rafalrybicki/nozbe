import React from 'react';
import './Toggler.css'

function Toggler({completion, onclick}) {
  return (
    <div 
      className="toggler" 
      onClick={onclick}
    >
      {completion && <span className="tick">&#10003;</span>}
    </div>
  );
}

export default Toggler;