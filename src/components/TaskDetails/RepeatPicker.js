import React from 'react';
import './RepeatPicker.css';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

function Repeat({ repeat }) {
  return (
    <div className={repeat ? 'picker' : 'picker unchecked'}>
      <Icon className="repeat">replay</Icon>
      <span>{repeat ? repeat : 'Repeat?'}</span>
    </div>
  );
}

export default Repeat;