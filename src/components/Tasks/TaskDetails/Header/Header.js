import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask, toggleCompletion } from '../../../../redux/actions';
import './Header.css';
import Toggler from '../../../shared/Toggler';
import PriorityToggler from '../../../shared/PriorityToggler';
import EditForm from './EditForm';

function Header({ content, completion, id, priority, toggleCompletion, togglePriority, editTask}) {
  const [editForm, showEditForm] = useState(false);

  let className = completion ? "header completed" : "header";
  
  if (editForm) {
    className += " show-form"
  }

  return (
    <div className={className}>
      <Toggler 
        className={"completion-toggler"}
        id={id}
        onClick={toggleCompletion}
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
    editTask: (id, newValues) => dispatch(editTask(id, newValues)),
    toggleCompletion: (id) => dispatch(toggleCompletion(id))
  }
}

export default connect(null, mapDispachToprops)(Header);