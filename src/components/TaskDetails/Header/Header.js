import React from 'react';
import { connect } from 'react-redux';
import {  editTask } from '../../../redux/actions';
import './Header.css';
import CompletionToggler from '../../shared/CompletionToggler';
import PriorityToggler from '../../shared/PriorityToggler';
import EditForm from './EditForm';

function Header({ content, completion, id, priority, toggleCompletion, togglePriority, editTask}) {
  const showEditForm = () => {
    document.querySelector('.header').classList.add('show-form')
  }
  // this.props.dispatch(completeTasks(this.state.selectedTasks))
  
  return (
    <div className={completion ? "header task-completed" : "header"}>
      <CompletionToggler 
        completion={completion}
        id={id}
      />
      <p 
        onClick={showEditForm}
      >{content}</p>
      <PriorityToggler 
        priority={priority}
        id={id}
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
    editTask: (id, newValues) => dispatch(editTask(id, newValues))
  }
}

export default connect(null, mapDispachToprops)(Header);