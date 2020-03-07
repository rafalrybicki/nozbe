import { 
  TOGGLE_PRIORITY, 
  TOGGLE_COMPLETION,
  ADD_TASK 
} from './actionTypes'

export const togglePriority = id => ({
  type: TOGGLE_PRIORITY,
  id
})

export const toggleCompletion = id => ({
  type: TOGGLE_COMPLETION,
  id
})

export const addTask = (content, project) => ({
  type: ADD_TASK,
  content,
  project
})
