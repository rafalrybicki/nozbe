import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar'
import StatusBar from './StatusBar'
import EditBar from './EditBar'
import Task from './Task'
import NewTask from './NewTask'
import { togglePriority, toggleCompletion, completeTasks, deleteTasks} from '../redux/actions'
import './Tasks.css'
import { Checkbox } from '@material-ui/core';

function mapStateToProps(state) {
  return {
    tasks: state.tasks//.filter(task => task.priority === true)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    togglePriority: (id) => dispatch(togglePriority(id)),
    toggleCompletion: (id) => dispatch(toggleCompletion(id)),
    dispatch: (func) => dispatch(func)
    // deleteTasks: (tasks) => dispatch(deleteTasks(tasks))
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
      tasksToUpdate: [],
      allTasks: this.props.tasks.map(task => task.id)
    };
  };

  changeMode = () => {
    this.setState(prevState => {
      return {viewMode: !prevState.viewMode}
    })
  }

  selectTask = (id) => {
    const selectAll = document.querySelector('.toolbar input')

    if (this.state.tasksToUpdate.includes(id)) {
      selectAll.checked = false
      this.setState(prevState => {
        return { tasksToUpdate: prevState.tasksToUpdate.filter(taskId => taskId !== id) }
      })
    } else {
      this.setState(prevState => {
        return { tasksToUpdate: [...prevState.tasksToUpdate, id] }
      })
    }
  }

  selectAll = () => {
    if(this.state.tasksToUpdate.length < this.state.allTasks.length) {
      this.setState(prevState => {
        return { tasksToUpdate: [...prevState.allTasks] }
      })
    } else {
      this.setState({ tasksToUpdate: [] })      
    }
    const checkboxes = document.querySelectorAll('.task input')
    const checked = this.state.tasksToUpdate.length === this.state.allTasks.length
    checkboxes.forEach(task => task.checked = !checked)
  }

  completeTasks = () => {
    if (this.state.tasksToUpdate.length === 0) {
      alert(false)
      return
    }
    this.props.dispatch(completeTasks(this.state.tasksToUpdate))
    document.querySelector('.select-all').checked = false;
    this.setState({ tasksToUpdate: [] })
  }

  deleteTasks = () => {
    if(this.state.tasksToUpdate.length === 0) {
      alert(false)
      return
    }
    this.props.dispatch(deleteTasks(this.state.tasksToUpdate))
    document.querySelector('.select-all').checked = false;
    this.setState({ tasksToUpdate: [] })
  }

  render() {
    const {project, viewMode} = this.state
    return (
      <div className="tasks">
        <Toolbar 
          title={project} 
          viewMode={viewMode} 
          closeEditMode={this.changeMode}
          selectAll={this.selectAll} 
          quantity={this.state.tasksToUpdate.length} 
          checked={this.state.tasksToUpdate.length === this.state.allTasks.length}
        />
        <NewTask project={project} />
        {this.props.tasks.map(task => (
          <Task 
            {...task} 
            key={task.id} 
            togglePriority={() => this.props.togglePriority(task.id)}
            toggleCompletion={() => this.props.toggleCompletion(task.id)}
            selectTask={() => this.selectTask(task.id)}
            viewMode={viewMode}
            checked={this.state.tasksToUpdate.length === this.state.allTasks.length }
          />
        ))}
        {viewMode && <StatusBar done={1} left={4} changeMode={this.changeMode} completeTasks={this.completeTasks} />}
        {!viewMode && <EditBar deleteTasks={this.deleteTasks} completeTasks={this.completeTasks} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);