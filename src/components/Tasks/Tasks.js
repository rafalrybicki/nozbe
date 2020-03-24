import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar'
import StatusBar from '../StatusBar'
import EditBar from '../EditBar'
import Task from './Task/Task'
import TaskDetails from './TaskDetails/TaskDetails';
// import { completeTasks, deleteTasks} from '../../redux/actions'
import './Tasks.css'


class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: this.props.location.pathname.split('/')[1],
      editMode: false
    };
  };

  changeMode = () => {
    document.querySelector('.tasks').classList.toggle('edit-mode');
    this.setState(prevState => {
      return {
        editMode: !prevState.mode
      }
    })
  }

  render() {
    const {tasks} = this.props;
    const activeId = +this.props.match.params.id
    const activeTaskIndex = tasks.findIndex(el => el.id === activeId);

    return (
      <div className="tasks" >
        <Toolbar 
          content={this.props.location.pathname.split('/')[1]}
          closeEditMode={this.changeMode}
        />

        {this.props.tasks.map((task,i) => (
          <Task 
            key={task.id} 
            {...task} 
            index={i}
            active={activeId === task.id}
            history={this.props.history}
            editMode={this.state.editMode}
            prevTaskId={tasks[i-1]}
            nexTaskId={tasks[i+1]}
          />
        ))}

        <StatusBar 
          done={1} 
          left={4} 
          changeMode={this.changeMode} 
          completeTasks={this.completeTasks} 
        />

        <EditBar 
          deleteTasks={this.deleteTasks} 
          completeTasks={this.completeTasks} 
        />

        {this.props.match.params.id && 
        <TaskDetails 
          {...tasks[activeTaskIndex]} 
          changeTask={(index) => this.setState({activeTask: index})}
          lastTaskId={tasks[tasks.length -1].id} 
          closeDetails={() => this.setActiveTask(null)}
        />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks//.filter(task => task.priority === true)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (func) => dispatch(func)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

