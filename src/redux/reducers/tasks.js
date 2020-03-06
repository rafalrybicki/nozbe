import { TOGGLE_PRIORITY, TOGGLE_COMPLETION } from '../actions/actionTypes'

const initialState = [
  {
    id: 1,
    content: 'content1',
    completion: false,
    priority: true,
    time: '10 min',
    project: 'inbox',
    category: 'sport',
    date: Date.now(),
    repeat: true,
    comments: [{}, {}]
  },
  {
    id: 2,
    content: 'content2',
    completion: true,
    priority: false,
    time: '5 min',
    project: 'some project',
    category: 'work',
    date: Date.now(),
    repeat: false,
    comments: []
  },
  {
    id: 3,
    content: 'content3',
    completion: false,
    priority: false,
    time: '30 min',
    project: 'inbox',
    category: 'home',
    date: Date.now(),
    repeat: false,
    comments: []
  },
  {
    id: 4,
    content: 'content4',
    completion: true,
    priority: true,
    time: '1 h',
    project: 'project2',
    category: 'work',
    date: false,
    repeat: false,
    comments: []
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
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          completed: false,
          priority: true,
          project: 'inbox',
        }
      ]
    default:
      return state
  }
}

export default tasks