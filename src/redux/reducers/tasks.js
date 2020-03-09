import { TOGGLE_PRIORITY, TOGGLE_COMPLETION, ADD_TASK } from '../actions/actionTypes'

const initialState = [
  {
    id: 1,
    content: 'content1',
    completion: false,
    priority: true,
    time: '10 min',
    project: 'inbox',
    category: [],
    date: Date.now(),
    repeat: true,
    comments: [{}, {}],
    holder: 'R R'
  },
  {
    id: 2,
    content: 'content2',
    completion: true,
    priority: false,
    time: '5 min',
    project: 'some project',
    category: ['work'],
    date: Date.now(),
    repeat: false,
    comments: [],
    holder: 'John Doe'
  },
  {
    id: 3,
    content: 'content3',
    completion: false,
    priority: false,
    time: '30 min',
    project: 'inbox',
    category: ['home'],
    date: Date.now(),
    repeat: false,
    comments: [],
    holder: 'John Doe'
  },
  {
    id: 4,
    content: 'content4',
    completion: true,
    priority: true,
    time: '1 h',
    project: 'project2',
    category: [],
    date: false,
    repeat: false,
    comments: [],
    holder: 'R R'
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
    default:
      return state
  }
}

export default tasks