import React from 'react';
import './StatusBar.css'
import Icon from '@material-ui/core/Icon';

function StatusBar({done, left}) {
  return (
    <div className="status-bar">
      <Icon>more_horiz</Icon>
      {`${done} done  :  ${left} left`}
      <Icon>add</Icon>
    </div>
  );
}

export default StatusBar;