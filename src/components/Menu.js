import React from 'react'
import MenuItem from './MenuItem';
import './Menu.css'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    priority: state.tasks.filter(task => task.priority === true).length,
    inbox: state.tasks.filter(task => task.project === 'inbox').length,
  };
}

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
          <MenuItem icon='star' path='priority' amount={this.props.priority} />
          <MenuItem icon='inbox' path='inbox' amount={this.props.inbox} />
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

export default connect(
  mapStateToProps,
)(Menu);