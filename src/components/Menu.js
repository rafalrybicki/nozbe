import React from 'react'
import MenuItem from './MenuItem';
import './Menu.css'

class Menu extends React.Component {
  closeMenu = (e) => {
    if (window.innerWidth < 734 && e.clientX > 320) {
      document.querySelector('nav').classList.remove('open')
    }
  }

  render() {
    return (
      <nav onClick={this.closeMenu}>
        <div className="menu">
          <MenuItem icon='star' path='priority' amount={5} />
          <MenuItem icon='inbox' path='inbox' amount={1} />
          <MenuItem icon='assignmentnbox' path='projects' />
          <MenuItem icon='flag' path='categories' />
          <MenuItem icon='event_note' path='calendar' />
          <MenuItem icon='work' path='templates' />
          <MenuItem icon='people' path='team' />
          <MenuItem icon='search' path='search' />
          <MenuItem icon='settings' path='settings' />
        </div>
      </nav>
      )
  }
}

export default Menu