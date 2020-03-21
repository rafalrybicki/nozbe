import {
  ADD_COMMENT
} from '../actions/actionTypes'

const initialState = {
  1: [
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
  2: [
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
  ]
}

const taskComments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.taskId]: [
          ...state[action.taskId],
          action.newComment
        ]
      }
    default:
      return state;
  }
}

export default taskComments