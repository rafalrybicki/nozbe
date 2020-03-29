import { 
  CREATE_TASK, 
  EDIT_TASK,
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION,
  DELETE_TASKS,
  DELETE_TASK,
  COMPLETE_TASKS,
  CLONE_TASK,
  CREATE_COMMENTS_KEY,
  ADD_COMMENT,
  DELETE_COMMENT,
  CLONE_COMMENTS,
  CHECK_ALL,
  TOGGLE_CHECKLIST_ITEM,
} from './actionTypes'

export const createTask = task => ({
  type: CREATE_TASK,
  task
})

export const cloneTask = (originalTaskId, newTaskId, date) => ({
  type: CLONE_TASK,
  originalTaskId,
  newTaskId,
  date
})

export const deleteTask = id => ({
  type: DELETE_TASK,
  id
})

export const editTask = (id, newValues) => ({
  type: EDIT_TASK,
  id,
  newValues
})

export const togglePriority = id => ({
  type: TOGGLE_PRIORITY,
  id
})

export const toggleCompletion = id => ({
  type: TOGGLE_COMPLETION,
  id
})

// for many Tasks

export const completeTasks = tasks => ({
  type: COMPLETE_TASKS,
  tasks
})

export const deleteTasks = array => ({
  type: DELETE_TASKS,
  array
})

// comments

export const createCommentsKey = (taskId, comments) => ({
  type: CREATE_COMMENTS_KEY,
  taskId,
  comments
})

export const addComment = (taskId, newComment) => ({
  type: ADD_COMMENT,
  taskId,
  newComment
})

export const deleteComment = (taskId, commentId) => ({
  type: DELETE_COMMENT,
  taskId,
  commentId
})

export const checkAll = (taskId, index, value) => ({
  type: CHECK_ALL,
  taskId,
  index,
  value
})

export const toggleChecklistItem = (taskId, commentIndex, itemIndex) => ({
  type: TOGGLE_CHECKLIST_ITEM,
  taskId,
  commentIndex,
  itemIndex
})

export const cloneTaskComments = (originalTaskId, newTaskId, date) => ({
  type: CLONE_COMMENTS,
  originalTaskId,
  newTaskId,
  date
})