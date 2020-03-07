import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar'
import StatusBar from './StatusBar'
import Task from './Task'
import { togglePriority, toggleCompletion } from '../redux/actions'
import './Tasks.css'

function mapStateToProps(state) {
  return {
    tasks: state.tasks//.filter(task => task.priority === true)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    togglePriority: (id) => dispatch(togglePriority(id)),
    toggleCompletion: (id) => dispatch(toggleCompletion(id))
  };
}

// return {
//   priority: state.tasks.filter(task => task.priority === true)
//   inbox: state.tasks.filter(task => task.project === 'inbox')
// };

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <Toolbar title={this.props.match.path} />
        {this.props.tasks.map(task => (
          <Task 
            {...task} 
            key={task.id} 
            togglePriority={() => this.props.togglePriority(task.id)}
            toggleCompletion={() => this.props.toggleCompletion(task.id)}
          />
        ))}
        <StatusBar done={1} left={4} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);