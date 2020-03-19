import { 
  ADD_TASK, 
  EDIT_TASK,
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION,
  DELETE_TASKS,
  COMPLETE_TASKS
} from './actionTypes'

export const addTask = (content, project) => ({
  type: ADD_TASK,
  content,
  project
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

export const completeTasks = tasks => ({
  type: COMPLETE_TASKS,
  tasks
})

export const deleteTasks = tasks => ({
  type: DELETE_TASKS,
  tasks
})
