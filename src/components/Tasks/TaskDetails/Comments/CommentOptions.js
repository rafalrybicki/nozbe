import React, { useState } from 'react';
import './CommentOptions.css';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../../shared/OptionListItem';
import { connect } from 'react-redux';
import { deleteComment, createTask, createCommentsKey } from '../../../../redux/actions';

function CommentOptions({taskId, commentId, type, content, deleteComment, createTask, createCommentsKey, showEditForm}) {
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

  // const handleEditAction = () => {
  //   setTimeout(() => {
  //     alert('Coming soon')
  //   }, 0)
  // }

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

  const createNewTask = () => {
    const taskId = Math.random();
    const date = new Date();
    const taskContent = type === 'text' ? content : content[0].value;
    const commentContent = type === 'text' ? content : [];

    if (type === 'checklist') {
      content.map(item => commentContent.push({
        value: item.value, 
        id: Math.random(), 
        completion: false
      }))    
    }

    const newTask = getNewTask(taskId, taskContent, date, 'project to change here');
    const newComment = getNewComment(type, commentContent, date)

    createTask(newTask);
    createCommentsKey(taskId, [newComment]);
  }

  return (
    <div className="comment-options">
      <Icon onClick={toggleOptions}>more_horiz</Icon>
      <div className={optionList ? "option-list" : "option-list hide"}>
        <OptionListItem
          icon={'edit'}
          text={'Edit'}
          onClick={showEditForm}
        />
        <OptionListItem
          icon={'assignment_returned'}
          text={'Copy to clipboard'}
          onClick={copyToClipboard}
        />
        <OptionListItem
          icon={'add'}
          text={'Create a task with this comment'}
          onClick={createNewTask}
        />
        <OptionListItem
          icon={'delete'}
          text={'Delete'}
          onClick={handleDeleteAction}
        />
      </div>
    </div>
  )
}

const getNewTask = (id, content, date, project) => ({
  id,
  author: 'Current User',
  content: content,
  completion: false,
  priority: project === 'priority' ? true : false,
  duration: null,
  project: {
    name: 'Inbox',
    path: '/inbox',
    color: 'black'
  },
  deadline: null,
  categories: [],
  repeat: false,
  created_at: date,
  updated_at: date,
  holder: 'Current User',
  comments: []
})

const getNewComment = (type, content, date) => ({
  id: Math.random(),
  content,
  date, 
  type,
  created_at: date,
  updated_at: date,
  author: 'Current User'
})

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (taskId, commentId) => dispatch(deleteComment(taskId, commentId)),
    createTask: task => dispatch(createTask(task)),
    createCommentsKey: (taskId, arr) => dispatch(createCommentsKey(taskId, arr))
  }
}

export default connect(null, mapDispatchToProps)(CommentOptions);