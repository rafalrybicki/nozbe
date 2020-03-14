import { TOGGLE_PRIORITY, TOGGLE_COMPLETION, COMPLETE_TASKS, ADD_TASK, DELETE_TASKS } from '../actions/actionTypes'

const initialState = [
  {
    id: 1,
    content: 'content1',
    completion: false,
    priority: true,
    time: '10 min',
    project: {
      name: 'Inbox',
      path: '/inbox'
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
    date: new Date('2020-03-09'),
    repeat: true,
    comments: [
      { type: 'text', content: 'random comment', created_at: new Date(), author: 'John Doe' }, 
      { type: 'text', content: 'random comment', created_at: new Date(), author: 'John Doe' }
    ],
    holder: 'R R',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 2,
    content: 'content2',
    completion: true,
    priority: false,
    time: '5 min',
    project: {
      name: 'Inbox',
      path: '/inbox'
    },
    categories: [
      {
        name: 'Home',
        icon: 'home'
      }
    ],
    date: new Date(),
    repeat: false,
    comments: [],
    holder: 'John Doe',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 3,
    content: 'content3',
    completion: false,
    priority: false,
    time: '30 min',
    project: {
      name: 'Home',
      path: '/home'
    },
    categories: [
      {
        name: 'Home',
        icon: 'home'
      }
    ],
    date: new Date(),
    repeat: false,
    comments: [],
    holder: 'John Doe',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: 4,
    content: 'content4',
    completion: true,
    priority: true,
    time: '1 h',
    project: {
      name: 'Home',
      path: '/home'
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
    date: new Date(),
    repeat: false,
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
          id: Math.random(),
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
      ]
    case DELETE_TASKS:
      return state.filter(
        task => !action.tasks.includes(task.id)
      )
    default:
      return state
  }
}

export default tasks