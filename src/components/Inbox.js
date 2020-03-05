import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    tasks: state.tasks.filter(task => task.project === 'inbox')
  };
}

class Inbox extends Component {
  addTask = () => {
    this.props.dispatch({type: 'ADD_TASK', id: Math.random(), content: 'new task'})
  }
  render() {
    const tasks = this.props.tasks.map(task => (
      <div key={task.id} >{task.content}</div>
    ))
    return (
      <div onClick={this.addTask}>
        {tasks}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Inbox);