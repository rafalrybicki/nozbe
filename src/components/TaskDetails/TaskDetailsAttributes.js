import React from 'react';
import './TaskDetailsAttributes.css'
import Icon from '@material-ui/core/Icon';

function TaskDetailsAttributes(props) {
  return (
    <div className="task-details-attributes">
      <div className="picker">
        <Icon>fiber_manual_record</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon>schedule</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon>today</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon>replay</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon>home</Icon>
        <span>1</span>
        <div>5</div>
        5
        <div>5</div>
      </div>
    </div>
  );
}

export default TaskDetailsAttributes;