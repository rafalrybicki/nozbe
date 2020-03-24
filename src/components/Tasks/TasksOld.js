import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar'
import StatusBar from '../StatusBar'
import EditBar from '../EditBar'
import Task from './Task/Task'
import TaskDetails from './TaskDetails/TaskDetails';
import NewTask from './NewTask'
import { completeTasks, deleteTasks} from '../../redux/actions'
import './Tasks.css'

function mapStateToProps(state) {
  return {
    tasks: state.tasks//.filter(task => task.priority === true)
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
      // activeTask: this.props.match.params.id ? +this.props.match.params.id : null,
      selectedTasks: [],
      allTasks: this.props.tasks.map(task => task.id)
    };
  };
 

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

  deleteTasks = () => {
    if(this.state.selectedTasks.length === 0) {
      alert(false)
      return
    }
    this.props.dispatch(deleteTasks(this.state.selectedTasks))
    document.querySelector('.select-all').checked = false;
    this.setState({ selectedTasks: [] })
  }

  setActiveTask = (index) => {
    if (this.state.activeTask === index) {
      this.setState({ activeTask: null})
    } else {
      this.setState({ activeTask: index })
    }
  }

  render() {
    const { project, mode, activeTask } = this.state
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
            key={task.id} 
            {...task} 
            index={i}
            activeTask={activeTask}
            mode={mode}
            addToSelected={() => this.selectTask(task.id)}
            checked={this.state.selectedTasks.length === this.state.allTasks.length }
            history={this.props.history}
            // setActiveTask={this.setActiveTask}
          />
        ))}

        {mode === 'view' && 
        <StatusBar 
          done={1} 
          left={4} 
          changeMode={this.changeMode} 
          completeTasks={this.completeTasks} 
        />}

        {mode === 'edit' && 
        <EditBar 
          deleteTasks={this.deleteTasks} 
          completeTasks={this.completeTasks} 
        />}

        {this.props.match.params.id && 
        <TaskDetails 
          index={activeTask}
          activeTask={+this.props.match.params.id}
          {...this.props.tasks[+this.props.match.params.id]} 
          changeTask={(index) => this.setState({activeTask: index})}
          lastTask={activeTask === this.props.tasks.length -1} 
          closeDetails={() => this.setActiveTask(null)}
        />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

