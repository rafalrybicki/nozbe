import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar'
import StatusBar from '../StatusBar'
import EditBar from '../EditBar'
import Task from './Task/Task'
import TaskDetails from '../TaskDetails/TaskDetails';
import NewTask from './NewTask'
import { togglePriority, toggleCompletion, completeTasks, deleteTasks} from '../../redux/actions'
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
      mode: 'view',
      selectedTask: 0,
      selectedTasks: [],
      allTasks: this.props.tasks.map(task => task.id)
    };
  };
 
  componentDidMount() {
    document.querySelector('#root').addEventListener('click', this.hideTaskDetails)
  }

  componentWillUnmount() {
    document.querySelector('#root').removeEventListener('click', this.hideTaskDetails)
  }

  hideTaskDetails = (e) => {
    const tasks = document.querySelector('.show-details')

    if (tasks) {
      const path = [...e.path]
      path.length = path.length - 5

      let hideDetails = true
      
      for (let i = 0; i < path.length; i++) {
        if (path[i].classList.contains('task-details') || path[i].classList.contains('task')) {
          hideDetails = false
          break
        }
      }

      if (hideDetails) {
        tasks.classList.remove('show-details')
        document.querySelector('.task.active').classList.remove('active')
      }
    }
  }

  changeMode = () => {
    this.setState(prevState => {
      return {
        mode: prevState.mode === 'view' ? 'edit' : 'view',
        selectedTasks: []
      }
    })
    document.querySelector('.tasks').classList.toggle('edit-mode')
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

  toggleDetails = (index) => {
    const tasks = document.querySelector('.tasks')

    this.setState({ selectedTask: index })

    if (tasks.classList.contains('show-details') && this.state.selectedTask === index) {
      tasks.classList.remove('show-details')
    } else if (!tasks.classList.contains('show-details')) {
      tasks.classList.add('show-details')
    }

    // if (this.state.selectedTask === id ) {
    //   if (detailsShown) {
    //     document.querySelector('.tasks').classList.remove('show-details')
    //   } else {
    //     document.querySelector('.tasks').classList.add('show-details')
    //   }
    // } else {
    //   const newTask = this.props.tasks.find(task => task.id === id)
    //   this.setState({selectedTask: newTask})
    //   document.querySelector('.tasks').classList.add('show-details')
    // }
  }

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
    const { project, mode, selectedTask } = this.state
    return (
      <div className="tasks" >
        <Toolbar 
          title={project} 
          mode={mode} 
          closeEditMode={this.changeMode}
          selectAll={this.selectAll} 
          quantity={this.state.selectedTasks.length} 
          checked={this.state.selectedTasks.length === this.state.allTasks.length}
        />
        <NewTask project={project} />
        {this.props.tasks.map((task,i) => (
          <Task 
            {...task} 
            index={i}
            key={task.id} 
            togglePriority={() => this.props.togglePriority(task.id)}
            toggleCompletion={() => this.props.toggleCompletion(task.id)}
            addToSelected={() => this.selectTask(task.id)}
            mode={mode}
            checked={this.state.selectedTasks.length === this.state.allTasks.length }
            toggleDetails={() => this.toggleDetails(i)}
          />
        ))}
        {mode === 'view' && <StatusBar done={1} left={4} changeMode={this.changeMode} completeTasks={this.completeTasks} />}
        {mode === 'edit' && <EditBar deleteTasks={this.deleteTasks} completeTasks={this.completeTasks} />}
        <TaskDetails {...this.props.tasks[selectedTask]} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);