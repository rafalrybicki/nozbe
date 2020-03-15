import React from 'react';
import './TaskDetailsAttributes.css'
import Icon from '@material-ui/core/Icon';
import ProjectPicker from './ProjectPicker';

function TaskDetailsAttributes({ project, deadline, categories, repeat, time }) {
  return (
    <div className="task-details-attributes">
      <ProjectPicker project={project.name} color={project.color} />
      <div className="picker">
        <Icon>schedule</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon>today</Icon>
        <span>1</span>
      </div>
      <div className="picker">
        <Icon className="repeat">replay</Icon>
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