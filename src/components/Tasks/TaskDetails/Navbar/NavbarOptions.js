import React from 'react';
import './NavbarOptions.css';
import { connect } from 'react-redux';
import { deleteTask, cloneTask, cloneTaskComments } from '../../../../redux/actions';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../../shared/OptionListItem';

function NavbarOptions({id, closeDetails, dispatch}) {

  const toggleOptions = () => {
    document.querySelector('.task-details-navbar .option-list').classList.toggle('hide');
    document.addEventListener('click', hideOptions)
  }

  const hideOptions = () => {
    const optionList = document.querySelector('.task-details-navbar .option-list');
    if (optionList) {
      optionList.classList.add('hide')
    }
    document.removeEventListener('click', hideOptions)
  }

  const handleCloneAction = () => {
    const newTaskId = Math.random();
    const date = new Date();

    dispatch(cloneTaskComments(id, newTaskId, date))
    dispatch(cloneTask(id, newTaskId, date))
  } 

  const handleConvertAction = () => {
    setTimeout(() => {   //delete timeout if not window confirm
      alert('Coming soon')
    }, 0)
  }

  const handleShowAction = () => {
    setTimeout(() => {     //delete timeout if not window confirm
      alert('Coming soon')
    }, 0)
  }

  const handleDeleteAction = () => {
    closeDetails()
    setTimeout(() => {
      if (window.confirm('Are you sure?')) {
        dispatch(deleteTask(id))
      }
    }, 0)
  }

  return (
    <>
      <Icon onClick={toggleOptions}>more_horiz</Icon>
      <div className="option-list hide">
        <OptionListItem 
          icon={'library_add'} 
          text={'Clone'} 
          onClick={handleCloneAction}
        />
        <OptionListItem 
          icon={'assignment'} 
          text={'Convert to project'}
          onClick={handleConvertAction} 
        />
        <OptionListItem 
          icon={'exit_to_app'} 
          text={'Show in project'}
          onClick={handleShowAction} 
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

export default connect()(NavbarOptions);