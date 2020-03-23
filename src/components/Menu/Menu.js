import React from 'react'
import MenuItem from './MenuItem';
import './Menu.css'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    priority: state.tasks.filter(task => task.priority === true).length,
    inbox: state.tasks.filter(task => task.project.name === 'Inbox').length,
  };
}

class Menu extends React.Component {
  render() {
    return (
        <div className="menu">
          <MenuItem icon='star' path='priority' quantity={this.props.priority} />
          <MenuItem icon='inbox' path='inbox' quantity={this.props.inbox} />
          <MenuItem icon='assignment' path='projects' />
          <MenuItem icon='flag' path='categories' />
          <MenuItem icon='event_note' path='calendar' />
          <MenuItem icon='work' path='templates' />
          <MenuItem icon='people' path='team' />
          <MenuItem icon='search' path='search' />
          <MenuItem icon='settings' path='settings' />
        </div>
      )
  }
}

export default connect(
  mapStateToProps,
)(Menu);