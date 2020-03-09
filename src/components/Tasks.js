import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar'
import StatusBar from './StatusBar'
import Task from './Task'
import NewTask from './NewTask'
import { togglePriority, toggleCompletion} from '../redux/actions'
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
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.location.pathname.split('/')[1],
      viewMode: true,
      tasksToUpdate: []
    };
  };

  changeMode = () => {
    this.setState(prevState => {
      return {viewMode: !prevState.viewMode}
    })
  }

  setTaskToUpdate = (id) => {
    if (this.state.tasksToUpdate.includes(id)) {
      this.setState(prevState => {
        return { tasksToUpdate: prevState.tasksToUpdate.filter(taskId => taskId != id) }
      })
    } else {
      this.setState(prevState => {
        return { tasksToUpdate: [...prevState.tasksToUpdate, id] }
      })
    }
  }

  render() {
    const {project, viewMode} = this.state
    return (
      <div className="tasks">
        <Toolbar title={project} viewMode={viewMode} />
        <NewTask project={project} />
        {this.props.tasks.map(task => (
          <Task 
            {...task} 
            key={task.id} 
            togglePriority={() => this.props.togglePriority(task.id)}
            toggleCompletion={() => this.props.toggleCompletion(task.id)}
            setTaskToUpdate={() => this.setTaskToUpdate(task.id)}
            viewMode={viewMode}
          />
        ))}
        <StatusBar done={1} left={4} changeMode={this.changeMode}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);