import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <MenuItem icon='test' path='priority' />
        <MenuItem icon='test' path='inbox' />
        <MenuItem icon='test' path='projects' />
        <MenuItem icon='test' path='categories' />
        <MenuItem icon='test' path='calendar' />
        <MenuItem icon='test' path='templates' />
        <MenuItem icon='test' path='team' />
        <MenuItem icon='test' path='search' />
        <MenuItem icon='test' path='settings' />
      </div>
      )
  }
}

export default Menu