import { 
  ADD_TASK, 
  EDIT_TASK,
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION,
  DELETE_TASKS,
  DELETE_TASK,
  COMPLETE_TASKS,
  CLONE_TASK,
  ADD_COMMENT
} from './actionTypes'

export const addTask = (content, project) => ({
  type: ADD_TASK,
  content,
  project
})

export const cloneTask = id => ({
  type: CLONE_TASK,
  id
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

// others

export const addComment = (taskId, newComment) => ({
  type: ADD_COMMENT,
  taskId,
  newComment
})