import {
  CREATE_KEY,
  ADD_COMMENT,
  CLONE_COMMENTS
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
  ],
  3: [],
  4: []
}

const taskComments = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_KEY:
      return {
        ...state,
        [action.taskId]: []
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.taskId]: [
          ...state[action.taskId],
          action.newComment
        ]
      }
    case CLONE_COMMENTS:
      return {
        ...state,
        [action.newTaskId]: cloneTaskComments(state[action.originalTaskId], action.date)
      }
    default:
      return state;
  }
}

const cloneTaskComments = (originalTaskComments, date) => {
  if (!originalTaskComments) {
    return []
  }
  const clonedComments = [];

  originalTaskComments.map(originalComment => {
    const newComment = {
      ...originalComment,
      id: Math.random(),
      created_at: date,
      updated_at: date
    };

    if (originalComment.type === 'checklist') {
      newComment.content = originalComment.content.map(
        item => (
          { 
            ...item, 
            id: Math.random(),
            created_at: date,
            updated_at: date
          }
        )
      )
    }
    return clonedComments.push(newComment)
  })

  return clonedComments
}

export default taskComments