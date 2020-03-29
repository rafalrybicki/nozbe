import { 
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION, 
  CREATE_TASK, 
  // COMPLETE_TASKS, 
  DELETE_TASK, 
  // DELETE_TASKS, 
  EDIT_TASK ,
  CLONE_TASK
} from '../actions/actionTypes'

const initialState = {
  1 : {
    id: 1,
    author: 'John Doe',
    content: 'content1',
    completion: false,
    priority: true,
    duration: null,
    project: {
      name: 'Inbox',
      path: '/inbox',
      color: 'black'
    },
    categories: [],
    deadline: null,
    repeat: 'Every Month',
    
    holder: 'R R',
    created_at: new Date(),
    updated_at: new Date()
  },
  2: {
    id: 2,
    author: 'John Doe',
    content: 'content2',
    completion: true,
    priority: false,
    duration: null,
    project: {
      name: 'Inbox',
      path: '/inbox',
      color: 'black'
    },
    categories: [
      {
        name: 'Home',
        icon: 'home'
      }
    ],
    deadline: new Date(2020,2,16),
    repeat: null,
    holder: 'John Doe',
    created_at: new Date(),
    updated_at: new Date()
  },
  3: {
    id: 3,
    author: 'John Doe',
    content: 'content3',
    completion: false,
    priority: false,
    duration: '30 min',
    project: {
      name: 'Home',
      path: '/home',
      color: 'orange'
    },
    categories: [
      {
        name: 'Home',
        icon: 'home'
      },
      {
        name: 'Star',
        icon: 'star'
      },
      {
        name: 'DirectionsRun',
        icon: 'directions_run'
      },
      {
        name: 'Computer',
        icon: 'computer'
      },
      {
        name: 'Timer',
        icon: 'timer'
      }
    ],
    deadline: new Date(),
    repeat: 'Every year',

    holder: 'John Doe',
    created_at: new Date(),
    updated_at: new Date()
  },
  4: {
    id: 4,
    author: 'John Doe',
    content: 'content4',
    completion: true,
    priority: true,
    duration: '1 h',
    project: {
      name: 'Home',
      path: '/home',
      color: '#51B1FF'
    },
    categories: [
      {
        name: 'Home',
        icon: 'home' 
      },
      {
        name: 'Important',
        icon: 'directions_run'
      }
    ],
    deadline: new Date(),
    repeat: 'Every Week',
    comments: [],
    holder: 'R R',
    created_at: new Date(),
    updated_at: new Date()
  }
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIORITY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          priority: !state[action.id].priority
        }
      };
    case TOGGLE_COMPLETION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          completion: !state[action.id].completion
        }
      };
    // case COMPLETE_TASKS:
    //   return state.map(
    //     task => action.tasks.includes(task.id) ? { ...task, completion:  true } : task
    //   );
    case CREATE_TASK:
      return {
        ...state,
        [action.task.id]: action.task
      };
    case EDIT_TASK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.newValues
        }
      };
    case CLONE_TASK:
      return cloneTask(state, action.originalTaskId, action.newTaskId, action.date);
    case DELETE_TASK:
      return deleteTask(state, action.id);
    // case DELETE_TASKS:
    //   return state.filter(
    //     task => !action.tasks.includes(task.id)
    //   );
    default:
      return state;
  }
}

const deleteTask = (state, id) => {
  const newState = {...state};
  delete newState[id]
  return newState
}

const cloneTask = (state, originalTaskId, newTaskId, date) => {
  const oldTask = {...state[originalTaskId]}
  const clonedTask = {}

  clonedTask.id = newTaskId;
  clonedTask.content = oldTask.content;
  clonedTask.author = oldTask.author;
  clonedTask.completion = false;
  clonedTask.priority = oldTask.priority;
  clonedTask.duration = oldTask.duration;
  clonedTask.project = {...oldTask.project};
  clonedTask.deadline = oldTask.deadline ? new Date(+oldTask.deadline) : null;
  clonedTask.repeat = oldTask.repeat;
  clonedTask.holder = oldTask.holder;
  clonedTask.created_at = date;
  clonedTask.updated_at = date;
  clonedTask.categories = [];

  oldTask.categories.map(
    category => clonedTask.categories.push({...category})
  )

  return {
    ...state, 
    [newTaskId]: clonedTask
  }
}


export default tasks