import React from 'react';
import { connect } from 'react-redux';
import { togglePriority, toggleCompletion, editTask } from '../../../redux/actions';
import './Header.css';
import Toggler from '../../shared/Toggler';
import Priority from '../../shared/Priority';
import EditForm from './EditForm';

function Header({ content, completion, id, priority, toggleCompletion, togglePriority, editTask}) {
  const showEditForm = () => {
    document.querySelector('.header').classList.add('show-form')
  }
  // this.props.dispatch(completeTasks(this.state.selectedTasks))
  
  return (
    <div className={completion ? "header task-completed" : "header"}>
      <Toggler 
        completion={completion}
        onclick={() => toggleCompletion(id)}
      />
      <p 
        onClick={showEditForm}
      >{content}</p>
      <Priority 
        priority={priority}
        onClick={() =>togglePriority(id)}
      />
      <EditForm 
        prevContent={content} 
        onSave={(newValues) => editTask(id, newValues)}
      />
    </div>
  );
}

function mapDispachToprops(dispatch) {
  return {
    togglePriority: (id) => dispatch(togglePriority(id)),
    toggleCompletion: (id) => dispatch(toggleCompletion(id)),
    editTask: (id, newValues) => dispatch(editTask(id, newValues))
  }
}

export default connect(null, mapDispachToprops)(Header);