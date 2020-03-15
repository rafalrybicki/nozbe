import React from 'react';
import Icon from '@material-ui/core/Icon';

function PriorityIcon({color, priority, onClick}) {
  const style = {
    color: color || '#28ce63',
    height: '28px',
    width: '28px',
    fontSize: '28px'
  }

  return (
    <Icon 
      style={style}
      className="priority"
      onClick={onClick}
    >
      {priority ? 'star' : 'star_outlined'}
    </Icon>
  );
}

export default PriorityIcon;