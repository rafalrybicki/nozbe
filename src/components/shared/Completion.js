import React from 'react';
import './Completion.css'

function Completion({completion, onclick}) {
  return (
    <div 
      className="completion" 
      onClick={onclick}
    >
      {completion && <span className="tick">&#10003;</span>}
    </div>
  );
}

export default Completion;