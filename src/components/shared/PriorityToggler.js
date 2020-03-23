import React from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import { togglePriority } from '../../redux/actions';

function PriorityToggler({id, priority, dispatch, color}) {
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
      onClick={() => dispatch(togglePriority(id))}
    >
      {priority ? 'star' : 'star_outlined'}
    </Icon>
  );
}

export default connect()(PriorityToggler);