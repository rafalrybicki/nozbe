import React, { useState } from 'react';
import './CommentOptions.css';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../../../../shared/OptionListItem';
import { connect } from 'react-redux';
import { deleteComment } from '../../../../../../redux/actions';
// import {  createTask, createCommentsKey } from '../../../../../redux/actions';

function CommentOptions({taskId, commentId, deleteComment}) {
  const [optionList, showOptionList] = useState(false);

  const toggleOptions = () => {
    if (optionList) {
      return
    }
    showOptionList(true)
    document.addEventListener('click', hideOptions)
  }

  const hideOptions = () => {
    showOptionList(false)
    document.removeEventListener('click', hideOptions)
  }

  const handleEditAction = () => {
    setTimeout(() => {
      alert('Coming soon')
    }, 0)
  }

  const handleDeleteAction = () => {
    setTimeout(() => {
      if (window.confirm('Are you sure?')) {
        deleteComment(taskId, commentId)
      }
    }, 0)
  }

  const copyToClipboard = () => {
    setTimeout(() => {
      alert('Coming soon')
    }, 0)
  }

  return (
    <>
      <Icon onClick={toggleOptions}>more_horiz</Icon>
      <div className={optionList ? "option-list" : "option-list hide"}>
        <OptionListItem
          icon={'edit'}
          text={'Edit'}
          onClick={handleEditAction}
        />
        <OptionListItem
          icon={'assignment_returned'}
          text={'Copy to clipboard'}
          onClick={copyToClipboard}
        />
        <OptionListItem
          icon={'add'}
          text={'Create a task with this comment'}
          // onClick={createTask}
        />
        <OptionListItem
          icon={'delete'}
          text={'Delete'}
          onClick={handleDeleteAction}
        />
      </div>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (taskId, commentId) => dispatch(deleteComment(taskId, commentId))
  }
}

export default connect(null, mapDispatchToProps)(CommentOptions);