import React from 'react';
import './TaskDetailsAttributes.css'
import Icon from '@material-ui/core/Icon';
import ProjectPicker from './ProjectPicker';
import DurationPicker from './DurationPicker';
import DeadlinePicker from './DeadlinePicker';
import RepeatPicker from './RepeatPicker';

function TaskDetailsAttributes({ project, deadline, categories, repeat, duration }) {
  return (
    <div className="task-details-attributes">
      <ProjectPicker projectName={project.name} color={project.color} />
      <DurationPicker duration={duration} />
      <DeadlinePicker deadline={deadline} />
      <RepeatPicker repeat={repeat}/>
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