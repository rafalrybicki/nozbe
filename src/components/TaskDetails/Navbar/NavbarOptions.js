import React from 'react';
import './NavbarOptions.css';
import { connect } from 'react-redux';
import { deleteTask, cloneTask } from '../../../redux/actions';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../shared/OptionListItem';

function NavbarOptions({id, dispatch}) {

  const toggleOptions = () => {
    document.querySelector('.task-details-navbar .option-list').classList.toggle('hide');
    document.addEventListener('click', hideOptions)
  }

  const hideOptions = () => {
    document.querySelector('.task-details-navbar .option-list').classList.add('hide')
    document.removeEventListener('click', hideOptions)
  }

  const handleCloneAction = () => {
    setTimeout(() => {
      dispatch(cloneTask(id))
    }, 0)
  } 

  const handleShowAction = () => {
    setTimeout(() => {
      alert('Coming soon')
    }, 0)
  }

  const handleDeleteAction = () => {
    setTimeout(() => {
      if (window.confirm('Are you sure?')) {
        dispatch(deleteTask(id))
      }
    }, 0)
  }


  return (
    <div>
      <Icon onClick={toggleOptions}>more_horiz</Icon>
      <div className="option-list hide">
        <OptionListItem 
          icon={'link'} 
          text={'Copy task ref link'} 
          // onClick={handleAction}
          action={'copy'} 
        />
        <OptionListItem 
          icon={'library_add'} 
          text={'Clone'} 
          onClick={handleCloneAction}
          action={'clone'} 
        />
        <OptionListItem 
          icon={'assignment'} 
          text={'Convert to project'}
          // onClick={handleAction} 
          action={'convert'} 
        />
        <OptionListItem 
          icon={'exit_to_app'} 
          text={'Show in project'}
          onClick={handleShowAction} 
          action={'show'} 
        />
        <OptionListItem 
          icon={'delete'} 
          text={'Delete'} 
          onClick={handleDeleteAction}
          action={'delete'}
        />
      </div>
    </div>
  );
}

export default connect()(NavbarOptions);