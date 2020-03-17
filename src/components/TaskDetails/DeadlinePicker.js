import React from 'react';
import './DeadlinePicker.css';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

function Deadline({ deadline, completion }) {
  const delayed = new Date() > deadline && completion === false ? 'danger' : '';

  return (
    <div className={deadline ? 'picker' : 'picker unchecked'}>
      {/* <Icon>today</Icon>
      <span>{deadline ? moment(deadline).format("MMM Do YY LT") : 'Date?'}</span> */}

      <Icon className={delayed}>{delayed ? 'whatshot' : 'today'}</Icon>
      <span className={delayed + " text"}>
        {deadline ? moment(deadline).format("MMM D YY LT") : 'Date?'}
        </span>
    </div>
  );
}

export default Deadline;