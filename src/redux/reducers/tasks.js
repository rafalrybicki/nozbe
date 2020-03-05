const initialState = [
  {
    id: 1,
    content: 'content1',
    completed: false,
    priority: false,
    time: 10,
    project: 'inbox',
    category: 'sport',
    date: Date.now(),
    repeat: false,
    comments: []
  },
  {
    id: 2,
    content: 'content2',
    completed: true,
    priority: false,
    time: 5,
    project: 'inbox',
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
    time: 30,
    project: 'project1',
    category: 'home',
    date: Date.now(),
    repeat: false,
    comments: []
  },
  {
    id: 4,
    content: 'content4',
    completed: true,
    priority: false,
    time: 60,
    project: 'project2',
    category: 'work',
    date: Date.now(),
    repeat: false,
    comments: []
  }
]

const tasks = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default tasks