const initialState = [
  {
    id: 1,
    content: 'content1',
    finished: false,
    priority: false
  },
  {
    id: 2,
    content: 'content2',
    finished: true,
    priority: false
  },
  {
    id: 3,
    content: 'content3',
    finished: false,
    priority: true
  },
  {
    id: 4,
    content: 'content4',
    finished: true,
    priority: true
  }
]

const tasks = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default tasks