import React, { useState } from 'react';
import './CommentOptions.css';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../../../shared/OptionListItem';


function CommentOptions({deleteComment}) {
  const [optionsVisible, showOptions] = useState(false);

  const toggleOptions = () => {
    if (optionsVisible) {
      return
    }
    showOptions(true)
    document.addEventListener('click', hideOptions)
  }

  const hideOptions = () => {
    showOptions(false)
    document.removeEventListener('click', hideOptions)
  }

  const handleEditAction = () => {
    setTimeout(() => {
      alert('Coming soon')
    }, 0)
  }

  const handleCreateTaskAction = () => {
    
  }

  const handleDeleteAction = () => {
    setTimeout(() => {
      if (window.confirm('Are you sure?')) {
        deleteComment()
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
      <div className={optionsVisible ? "option-list" : "option-list hide"}>
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
          onClick={handleCreateTaskAction}
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

export default CommentOptions;