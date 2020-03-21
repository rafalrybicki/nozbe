import { 
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION, 
  COMPLETE_TASKS, 
  ADD_TASK, 
  DELETE_TASK, 
  DELETE_TASKS, 
  EDIT_TASK ,
  CLONE_TASK
} from '../actions/actionTypes'

const initialState = [
  {
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
    deadline: null,
    repeat: 'Every Month',
    
    holder: 'R R',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
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
  {
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
  {
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
]

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIORITY:
      return state.map(
        task => task.id === action.id ? { ...task, priority: !task.priority } : task
      );
    case TOGGLE_COMPLETION:
      return state.map(
        task => task.id === action.id ? { ...task, completion: !task.completion } : task
      );
    case COMPLETE_TASKS:
      return state.map(
        task => action.tasks.includes(task.id) ? { ...task, completion:  true } : task
      );
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          completion: false,
          priority: action.project === 'priority' ? true : false,
          time: null,
          project: action.project === 'priority' ? 'inbox' : action.project,
          date: null,
          category: [],
          repeat: false,
          comments: []
        }
      ];
    case EDIT_TASK:
      return state.map(
        task => task.id === action.id ? {...task, ...action.newValues} : task
      );
    case CLONE_TASK:
      return cloneTask(state, action.originalTaskId, action.newTaskId, action.date);
    case DELETE_TASK:
      return state.filter(
        task => task.id !== action.id
      );
    case DELETE_TASKS:
      return state.filter(
        task => !action.tasks.includes(task.id)
      );
    default:
      return state;
  }
}

const cloneTask = (state, originalTaskId, newTaskId, date) => {
  const oldTask = state.find(task => task.id === originalTaskId);
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

  return [...state, clonedTask]
}


export default tasks