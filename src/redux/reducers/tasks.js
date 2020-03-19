import { TOGGLE_PRIORITY, TOGGLE_COMPLETION, COMPLETE_TASKS, ADD_TASK, DELETE_TASKS, EDIT_TASK } from '../actions/actionTypes'

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
    comments: [
      {
        id: Math.random(),
        type: 'text',
        content: 'random comment',
        created_at: new Date(),
        author: 'John Doe'
      },
      {
        id: Math.random(),
        type: 'checklist',
        content: [
          {
            value: 'some text',
            completion: false,
            id: Math.random()
          },
          {
            value: 'some text',
            completion: true,
            id: Math.random()
          }
        ],
        created_at: new Date(),
        author: 'Jown Wayne'
      }
    ],
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
    comments: [],
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
    comments: [
      { 
        id: Math.random(), 
        type: 'text', 
        content: 'random comment', 
        created_at: new Date(), 
        author: 'John Doe' 
      },
      { id: Math.random(), 
        type: 'checklist', 
        content: [
          {
            value: 'some text',
            completion: false,
            id: Math.random()
          },
          {
            value: 'some text',
            completion: true,
            id: Math.random()
          }
        ],
        created_at: new Date(),
        author: 'Jown Wayne'
      }
    ],
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
    case EDIT_TASK:
      return state.map(
        task => task.id === action.id ? {...task, ...action.newValues} : task
      )
    case DELETE_TASKS:
      return state.filter(
        task => !action.tasks.includes(task.id)
      )
    default:
      return state
  }
}

export default tasks