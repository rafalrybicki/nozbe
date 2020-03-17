import React from 'react';
import './TaskDetailsAttributes.css'
import ProjectPicker from './ProjectPicker';
import DurationPicker from './DurationPicker';
import DeadlinePicker from './DeadlinePicker';
import RepeatPicker from './RepeatPicker';
import CategoryPicker from './CategoryPicker';

function TaskDetailsAttributes({ project, deadline, categories, repeat, duration, completion }) {
  return (
    <div className="task-details-attributes">
      <ProjectPicker projectName={project.name} color={project.color} />
      <DurationPicker duration={duration} />
      <DeadlinePicker deadline={deadline} completion={completion} />
      <RepeatPicker repeat={repeat}/>
      <CategoryPicker categories={categories} />
    </div>
  );
}

export default TaskDetailsAttributes;