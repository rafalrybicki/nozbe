import {
  CREATE_KEY,
  ADD_COMMENT,
  DELETE_COMMENT,
  CLONE_COMMENTS,
  CHECK_ALL,
  TOGGLE_CHECKLIST_ITEM
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

const comments = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_KEY:
      return {
        ...state,
        [action.taskId]: action.comments || []
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.taskId]: [
          ...state[action.taskId],
          action.newComment
        ]
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [action.taskId]: [...state[action.taskId].filter(el => el.id !== action.commentId)]
      }
    case CHECK_ALL:
      return {
        ...state,
        [action.taskId]: checkAll(state[action.taskId], action.index, action.value) 
      }
    case TOGGLE_CHECKLIST_ITEM:
      return {
        ...state,
        [action.taskId]: toggleChecklistItem(state[action.taskId], action.index, action.itemId)
      }
    case CLONE_COMMENTS:
      return {
        ...state,
        [action.newTaskId]: cloneComments(state[action.originalTaskId], action.date)
      }
    default:
      return state;
  }
}

const checkAll = (taskComments, index, value) => {
  const newTaskComments = [...taskComments];
  newTaskComments[index] = {
    ...taskComments[index],
    content: taskComments[index].content.map(item => ({...item, completion: value}))
  }
  return newTaskComments 
}

const toggleChecklistItem = (taskComments, index, itemId) => {
  const newTaskComments = [...taskComments];
  newTaskComments[index] = {
    ...taskComments[index],
    content: taskComments[index].content.map(
      item => item.id === itemId ? ({...item, completion: !item.completion }): item
    )
  }
  return newTaskComments 
}

const cloneComments = (originalTaskComments, date) => {
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



export default comments