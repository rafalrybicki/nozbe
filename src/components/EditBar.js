import React from 'react';
import Icon from '@material-ui/core/Icon';
import './EditBar.css'

function EditBar({deleteTasks}) {
  return (
    <div className="edit-bar">
      <button onClick={deleteTasks} className="delete"><Icon>delete</Icon></button>
      <button>Complete</button>
      <button>Change</button>
    </div>
  );
}

export default EditBar;