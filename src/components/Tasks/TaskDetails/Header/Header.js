import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../../../redux/actions';
import './Header.css';
import CompletionToggler from '../../../shared/CompletionToggler';
import PriorityToggler from '../../../shared/PriorityToggler';
import EditForm from './EditForm';

function Header({ content, completion, id, priority, toggleCompletion, togglePriority, editTask}) {
  const [editForm, showEditForm] = useState(false);

  let className = completion ? "header task-completed" : "header";
  
  if (editForm) {
    className += " show-form"
  }

  return (
    <div className={className}>
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
      {editForm && 
      <EditForm 
        prevContent={content} 
        closeForm={() => showEditForm(false)}
        onSave={(newContent) => editTask(id, newContent)}
      />}
    </div>
  );
}

function mapDispachToprops(dispatch) {
  return {
    editTask: (id, newValues) => dispatch(editTask(id, newValues))
  }
}

export default connect(null, mapDispachToprops)(Header);