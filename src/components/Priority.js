import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    tasks: state.tasks.filter(task => task.priority === true)
  };
}

class Priority extends Component {
  render() {
    const tasks = this.props.tasks.map(task => (
      <div key={task.id}>{task.content}</div>
    ))
    return (
      <React.Fragment>
        {tasks}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
)(Priority);