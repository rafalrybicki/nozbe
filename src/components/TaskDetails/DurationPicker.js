import React from 'react';
import './DurationPicker.css';
import Icon from '@material-ui/core/Icon';

function DurationPicker({duration}) {
  return (
    <div className={duration ? 'picker' : 'picker unchecked'}>
      <Icon>schedule</Icon>
      <span>{duration ? duration : 'Time needed?'}</span>
    </div>
  );
}

export default DurationPicker;