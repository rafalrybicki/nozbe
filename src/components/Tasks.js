import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar'
import StatusBar from './StatusBar'
import EditBar from './EditBar'
import Task from './Task/Task'
import TaskDetails from './TaskDetails/TaskDetails';
import NewTask from './NewTask'
import { togglePriority, toggleCompletion, completeTasks, deleteTasks} from '../redux/actions'
import './Tasks.css'

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
      // editedTask: null,
      selectedTasks: [],
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

    if (this.state.selectedTasks.includes(id)) {
      selectAll.checked = false
      this.setState(prevState => {
        return { selectedTasks: prevState.selectedTasks.filter(taskId => taskId !== id) }
      })
    } else {
      this.setState(prevState => {
        return { selectedTasks: [...prevState.selectedTasks, id] }
      })
    }
  }

  selectAll = () => {
    if(this.state.selectedTasks.length < this.state.allTasks.length) {
      this.setState(prevState => {
        return { selectedTasks: [...prevState.allTasks] }
      })
    } else {
      this.setState({ selectedTasks: [] })      
    }
    const checkboxes = document.querySelectorAll('.task input')
    const checked = this.state.selectedTasks.length === this.state.allTasks.length
    checkboxes.forEach(task => task.checked = !checked)
  }

  completeTasks = () => {
    if (this.state.selectedTasks.length === 0) {
      alert(false)
      return
    }
    this.props.dispatch(completeTasks(this.state.selectedTasks))
    document.querySelector('.select-all').checked = false;
    this.setState({ selectedTasks: [] })
  }

  // editTask = (id) => {
  //   if (this.state.editedTask === id) {
  //     this.setState({ editedTask: null})
  //   } else {
  //     this.setState({ editedTask: id})
  //   }
  // }

  deleteTasks = () => {
    if(this.state.selectedTasks.length === 0) {
      alert(false)
      return
    }
    this.props.dispatch(deleteTasks(this.state.selectedTasks))
    document.querySelector('.select-all').checked = false;
    this.setState({ selectedTasks: [] })
  }

  render() {
    const { project, viewMode, editedTask } = this.state
    return (
      <div className="tasks">
        <Toolbar 
          title={project} 
          viewMode={viewMode} 
          closeEditMode={this.changeMode}
          selectAll={this.selectAll} 
          quantity={this.state.selectedTasks.length} 
          checked={this.state.selectedTasks.length === this.state.allTasks.length}
        />
        <NewTask project={project} />
        {this.props.tasks.map(task => (
          <Task 
            {...task} 
            key={task.id} 
            togglePriority={() => this.props.togglePriority(task.id)}
            toggleCompletion={() => this.props.toggleCompletion(task.id)}
            addToSelected={() => this.selectTask(task.id)}
            viewMode={viewMode}
            checked={this.state.selectedTasks.length === this.state.allTasks.length }
          />
        ))}
        {viewMode && <StatusBar done={1} left={4} changeMode={this.changeMode} completeTasks={this.completeTasks} />}
        {!viewMode && <EditBar deleteTasks={this.deleteTasks} completeTasks={this.completeTasks} />}
        <TaskDetails />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);