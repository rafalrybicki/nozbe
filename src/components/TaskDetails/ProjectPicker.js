import React from 'react';
import './ProjectPicker.css';
import Icon from '@material-ui/core/Icon';

function ProjectPicker({projectName, color}) {
  return (
    <div className="picker">
      <Icon style={{'color': color}}>
        {projectName === 'Inbox' ? 'inbox' : 'fiber_manual_record'}
      </Icon>
      <span>{projectName}</span>
    </div>
  );
}

export default ProjectPicker;