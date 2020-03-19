import React from 'react';
import './NavbarOptions.css';
import Icon from '@material-ui/core/Icon';
import OptionListItem from '../../shared/OptionListItem'

function NavbarOptions(props) {

  const toggleOptions = () => {
    document.querySelector('.task-details-navbar .option-list').classList.toggle('hide')
  }

  return (
    <div>
      <Icon onClick={toggleOptions}>more_horiz</Icon>
      <div className="option-list hide">
        <OptionListItem icon={'link'} text={'Copy task ref link'} />
        <OptionListItem icon={'library_add'} text={'Clone'} />
        <OptionListItem icon={'assignment'} text={'Convert to project'} />
        <OptionListItem icon={'exit_to_app'} text={'Show in project'} />
        <OptionListItem icon={'delete'} text={'Delete'} />
      </div>
    </div>
  );
}

export default NavbarOptions;