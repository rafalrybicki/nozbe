import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css'

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <MenuItem icon='star' path='priority' amount={5} />
        <MenuItem icon='inbox' path='inbox' amount={1} />
        <MenuItem icon='all_inbox' path='projects' />
        <MenuItem icon='flag' path='categories' />
        <MenuItem icon='event_note' path='calendar' />
        <MenuItem icon='business_center' path='templates' />
        <MenuItem icon='people' path='team' />
        <MenuItem icon='search' path='search' />
        <MenuItem icon='settings' path='settings' />
      </div>
      )
  }
}

export default Menu