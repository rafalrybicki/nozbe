const initialState = [
  {
    id: 1,
    content: 'content1',
    completed: false,
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
    completed: true,
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
    completed: false,
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
    completed: true,
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