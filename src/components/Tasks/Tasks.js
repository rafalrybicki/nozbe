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
        editMode: !prevState.editMode
      }
    })
  }

  render() {
    const {tasks, comments, match} = this.props;
    const activeId = +match.params.id;
    const activeTaskIndex = tasks.findIndex(el => el.id === activeId)
    const pathName = '/' + match.url.split('/')[1];
    const prevTaskId = tasks[activeTaskIndex - 1] ? tasks[activeTaskIndex - 1].id : false;
    const nextTaskId = tasks[activeTaskIndex + 1] ? tasks[activeTaskIndex + 1].id : false;

    return (
      <div className="tasks" >
        <Toolbar 
          content={this.props.location.pathname.split('/')[1]}
          closeEditMode={this.changeMode}
        />

        {tasks.map((task,i) => (
          <Task 
            key={task.id} 
            {...task} 
            index={i}
            active={activeId === task.id}
            pathName={pathName}
            editMode={this.state.editMode}
          />
        ))}

        <StatusBar 
          done={1} 
          left={4} 
          changeMode={this.changeMode} 
          completeTasks={this.completeTasks}
          history={this.props.history} 
        />

        <EditBar 
          deleteTasks={this.deleteTasks} 
          completeTasks={this.completeTasks} 
        />

        {match.params.id && 
        <TaskDetails 
          {...tasks[activeTaskIndex]} 
          prevTaskId={prevTaskId}
          nextTaskId={nextTaskId}
          pathName={pathName}
          comments={comments[activeId]}
        />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: Object.values(state.tasks),
    comments: state.comments
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

