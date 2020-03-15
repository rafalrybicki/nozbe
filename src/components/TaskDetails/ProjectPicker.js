import React from 'react';
import './ProjectPicker.css';
import Icon from '@material-ui/core/Icon';

function ProjectPicker({project, color}) {
  return (
    <div className="picker">
      <Icon style={{'color': color}}>
        {project === 'Inbox' ? 'inbox' : 'fiber_manual_record'}
      </Icon>
      <span>1</span>
    </div>
  );
}

export default ProjectPicker;