import React from 'react';
import { connect } from 'react-redux';
import './CompletionToggler.css'
import { toggleCompletion } from '../../redux/actions';

function Toggler({completion, id, dispatch}) {
  return (
    <span 
      className="completion-toggler" 
      onClick={() => dispatch(toggleCompletion(id))} 
    >
      {completion && <span className="tick">&#10003;</span>}
    </span>
  );
}

export default connect()(Toggler);